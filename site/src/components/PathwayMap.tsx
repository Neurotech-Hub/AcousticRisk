import { useId, type KeyboardEvent } from 'react';
import { CLASSES, EDGES, NODES, displayClass, type EvidenceClass, type MapEdge, type MapNode, type Zone } from '../content/pathways';

export type Selection = { kind: 'edge' | 'node'; id: string } | null;

interface Props {
  /** Evidence classes currently shown at full strength. Others are faded. */
  active: Record<EvidenceClass, boolean>;
  selection: Selection;
  onSelect: (s: Selection) => void;
}

/**
 * The core of manuscript Fig. 3: the structures that carry the paper's main
 * argument. The full node and edge data stay in content/pathways.ts.
 */
export const CORE_Y: Record<string, number> = {
  cn: 60, ic: 160, mgb: 270, ac: 380,
  bla: 150, cea: 300,
  pnc: 60, pag: 240, aut: 380,
  startle: 60, disc: 125, freeze: 200, escape: 300, cardio: 400,
};

const ZONE_X: Record<Zone, number> = { sense: 140, value: 385, output: 650, response: 905 };
const ZONE_LABEL: Record<Zone, string> = { sense: 'Hearing', value: 'Valuation', output: 'Output', response: 'Response' };
const WIDTHS: Record<Zone, number> = { sense: 180, value: 190, output: 190, response: 130 };

const W = 980;
const H = 440;
const NODE_H = 48;

/** Arrowhead length in map units. Lines stop this far short so the head's tip lands on the box edge. */
const HEAD = 11;

type Pt = [number, number];
type Cubic = [Pt, Pt, Pt, Pt];

/** Where an arrow lands on a box edge, shifted so arrows sharing a target do not stack. */
const END_DY: Record<string, number> = {
  'mgb-bla': -9,
  'ac-bla': 9,
  'ic-pag': -9,
  'cea-pag': 9,
  'pag-escape': -9,
  'cea-escape': 9,
  'mgb-freeze': -14,
  'cea-freeze': 14,
};

/** Hand-routed curves for the few edges that would otherwise cross a node. Each ends level with its target. */
const CUSTOM: Record<string, Cubic[]> = {
  'ac-ic': [[[50, 380], [5, 380], [5, 160], [50, 160]]],
  'mgb-freeze': [[[230, 270], [330, 200], [700, 176], [840, 186]]],
  'cea-freeze': [[[480, 300], [600, 375], [760, 214], [840, 214]]],
  'bla-disc': [[[480, 150], [620, 150], [720, 125], [840, 125]]],
  // Over the top of LA/BLA, so it does not read as an arrow into that box.
  'ic-pag': [
    [[230, 158], [300, 100], [400, 100], [500, 100]],
    [[500, 100], [530, 100], [515, 231], [555, 231]],
  ],
};

export const CORE_NODES = NODES.filter((n) => n.id in CORE_Y);
export const CORE_EDGES = EDGES.filter((e) => e.from in CORE_Y && e.to in CORE_Y);

const node = (id: string) => CORE_NODES.find((n) => n.id === id)!;
const yOf = (n: MapNode) => CORE_Y[n.id];
const xOf = (n: MapNode) => ZONE_X[n.zone];
const wOf = (n: MapNode) => WIDTHS[n.zone];

function curves(e: MapEdge): Cubic[] {
  if (CUSTOM[e.id]) return CUSTOM[e.id];
  const a = node(e.from);
  const b = node(e.to);
  const dy = END_DY[e.id] ?? 0;
  if (a.zone === b.zone) {
    const sgn = yOf(b) > yOf(a) ? 1 : -1;
    const x = xOf(a);
    const y1 = yOf(a) + (sgn * NODE_H) / 2;
    const y2 = yOf(b) - (sgn * NODE_H) / 2;
    return [[[x, y1], [x, y1], [x, y2 - sgn * 24], [x, y2]]];
  }
  const x1 = xOf(a) + wOf(a) / 2;
  const x2 = xOf(b) - wOf(b) / 2;
  const k = (x2 - x1) / 2;
  const ya = yOf(a);
  const yb = yOf(b) + dy;
  return [[[x1, ya], [x1 + k, ya], [x2 - k, yb], [x2, yb]]];
}

/** Path string whose last point stops one arrowhead short of the target, along the line's own direction. */
function geometry(e: MapEdge): string {
  const cs = curves(e).map((c) => c.map((p) => [...p] as Pt) as Cubic);
  const last = cs[cs.length - 1];
  const [, , c2, end] = last;
  const dx = end[0] - c2[0];
  const dy = end[1] - c2[1];
  const len = Math.hypot(dx, dy) || 1;
  last[3] = [end[0] - (dx / len) * HEAD, end[1] - (dy / len) * HEAD];
  const f = (p: Pt) => `${p[0].toFixed(1)},${p[1].toFixed(1)}`;
  return `M ${f(cs[0][0])} ` + cs.map((c) => `C ${f(c[1])} ${f(c[2])} ${f(c[3])}`).join(' ');
}

const ANATOMY = '#758589';
const colorOf = (e: MapEdge) => (e.classes.length ? displayClass(e.classes)!.stroke : ANATOMY);
const MARKER_COLORS = [...new Set([...CLASSES.map((c) => c.stroke), ANATOMY])];

function key(handler: () => void) {
  return (ev: KeyboardEvent) => {
    if (ev.key === 'Enter' || ev.key === ' ') {
      ev.preventDefault();
      handler();
    }
  };
}

export function edgeLabel(e: MapEdge) {
  const cls = e.classes.length ? displayClass(e.classes)!.short : 'Background anatomy';
  return `${node(e.from).label} to ${node(e.to).label}. ${cls}.`;
}

/** Redraw of the core of manuscript Fig. 3. Line weight and pattern, not color, encode the evidence. */
export function PathwayMap({ active, selection, onSelect }: Props) {
  const uid = useId().replace(/:/g, '');
  const edgeOn = (e: MapEdge) => e.classes.length === 0 || e.classes.some((c) => active[c]);
  const selEdge = selection?.kind === 'edge' ? CORE_EDGES.find((e) => e.id === selection.id) : undefined;
  const related = new Set<string>(selEdge ? [selEdge.from, selEdge.to] : []);
  const zones = Object.keys(ZONE_X) as Zone[];

  return (
    <svg className={`pathway-map ${selEdge ? 'has-sel' : ''}`} viewBox={`0 0 ${W} ${H}`} role="group" aria-label="Pathways from sound to response. Select a connection or structure to read its evidence.">
      <defs>
        {MARKER_COLORS.map((c) => (
          <marker key={c} id={`${uid}-${c.slice(1)}`} viewBox="0 0 10 10" refX="0" refY="5" markerUnits="userSpaceOnUse" markerWidth={HEAD} markerHeight={HEAD} orient="auto">
            <path d="M0 0 L10 5 L0 10 z" fill={c} />
          </marker>
        ))}
      </defs>

      {zones.map((z) => (
        <text key={z} x={ZONE_X[z]} y="18" textAnchor="middle" className="map-zone">
          {ZONE_LABEL[z]}
        </text>
      ))}

      <g>
        {CORE_EDGES.map((e) => {
          const d = geometry(e);
          const cls = e.classes.length ? displayClass(e.classes)! : null;
          const on = edgeOn(e);
          const sel = selection?.kind === 'edge' && selection.id === e.id;
          const color = colorOf(e);
          return (
            <g
              key={e.id}
              className={`map-edge ${on ? '' : 'off'} ${sel ? 'sel' : ''}`}
              role="button"
              tabIndex={0}
              aria-pressed={sel}
              aria-label={edgeLabel(e)}
              onClick={() => onSelect({ kind: 'edge', id: e.id })}
              onKeyDown={key(() => onSelect({ kind: 'edge', id: e.id }))}
            >
              {sel && <path d={d} className="edge-halo" strokeWidth={(cls?.width ?? 1.6) + 9} />}
              <path
                d={d}
                className="edge-line"
                stroke={color}
                strokeWidth={cls?.width ?? 1.4}
                strokeDasharray={cls ? cls.dash : '2 5'}
                markerEnd={`url(#${uid}-${color.slice(1)})`}
              />
              <path d={d} className="edge-hit" />
            </g>
          );
        })}
      </g>

      <g>
        {CORE_NODES.map((n) => {
          const w = wOf(n);
          const cx = xOf(n);
          const cy = yOf(n);
          const sel = selection?.kind === 'node' && selection.id === n.id;
          const lines = wrap(n.sub ? `${n.label} (${n.sub})` : n.label, w);
          return (
            <g
              key={n.id}
              className={`map-node ${sel ? 'sel' : ''} ${related.has(n.id) ? 'rel' : ''} ${n.evidence ? 'has-ev' : ''}`}
              role="button"
              tabIndex={0}
              aria-pressed={sel}
              aria-label={n.label + (n.evidence ? '. Has evidence attached.' : '')}
              onClick={() => onSelect({ kind: 'node', id: n.id })}
              onKeyDown={key(() => onSelect({ kind: 'node', id: n.id }))}
            >
              <rect x={cx - w / 2} y={cy - NODE_H / 2} width={w} height={NODE_H} rx="9" />
              <text x={cx} y={cy + 4} textAnchor="middle" className="node-label">
                {lines.map((line, i) => (
                  <tspan key={i} x={cx} dy={i === 0 ? (lines.length > 1 ? -2 : 0) : 13}>
                    {line}
                  </tspan>
                ))}
              </text>
            </g>
          );
        })}
      </g>
    </svg>
  );
}

/** Greedy two-line word wrap by approximate character width. */
function wrap(text: string, width: number): string[] {
  const max = Math.floor((width - 14) / 7);
  const words = text.split(' ');
  const lines: string[] = [];
  let cur = '';
  for (const w of words) {
    if ((cur + ' ' + w).trim().length > max && cur) {
      lines.push(cur);
      cur = w;
    } else cur = (cur + ' ' + w).trim();
  }
  if (cur) lines.push(cur);
  return lines.length <= 2 ? lines : [lines[0], lines.slice(1).join(' ')];
}
