import { describe, expect, it } from 'vitest';
import { evaluate, FIELD_CONTEXT, LAB_CONTEXT, effectiveDanger, type Context, type ActionId } from './decision';

const base = { danger: 0.5, abrupt: false };
const net = (r: ReturnType<typeof evaluate>, id: ActionId) => r.scores.find((s) => s.id === id)!.net;

describe('decision model: direction of effect', () => {
  it('higher predicted danger raises the net score of every defensive action', () => {
    const lo = evaluate({ ...base, danger: 0.2 }, FIELD_CONTEXT);
    const hi = evaluate({ ...base, danger: 0.8 }, FIELD_CONTEXT);
    for (const id of ['vigilance', 'freeze', 'flee'] as ActionId[]) expect(net(hi, id)).toBeGreaterThan(net(lo, id));
    // Feeding runs the other way: the more danger is predicted, the more carrying on costs.
    expect(net(hi, 'feed')).toBeLessThan(net(lo, 'feed'));
  });

  it('a farther refuge lowers only the flee score', () => {
    const near = evaluate(base, { ...FIELD_CONTEXT, refuge: 0.1 });
    const far = evaluate(base, { ...FIELD_CONTEXT, refuge: 0.9 });
    expect(net(far, 'flee')).toBeLessThan(net(near, 'flee'));
    expect(net(far, 'freeze')).toBe(net(near, 'freeze'));
    expect(net(far, 'vigilance')).toBe(net(near, 'vigilance'));
  });

  it('more valuable feeding lowers every action that interrupts it', () => {
    const lean = evaluate(base, { ...FIELD_CONTEXT, food: 0.1 });
    const rich = evaluate(base, { ...FIELD_CONTEXT, food: 0.9 });
    for (const id of ['vigilance', 'freeze', 'flee'] as ActionId[]) expect(net(rich, id)).toBeLessThan(net(lean, id));
    expect(net(rich, 'feed')).toBeGreaterThan(net(lean, 'feed'));
  });

  it('feeding has its own benefit and cost, so its bar is never a fixed zero', () => {
    const r = evaluate({ ...base, danger: 0.3 }, FIELD_CONTEXT);
    const feed = r.scores.find((s) => s.id === 'feed')!;
    expect(feed.benefit).toBeGreaterThan(0);
    expect(feed.cost).toBeGreaterThan(0);
    expect(feed.net).toBeCloseTo(feed.benefit - feed.cost, 10);
  });

  it('walks feed -> scan -> freeze -> flee as danger rises in the default field context', () => {
    const order: ActionId[] = [];
    for (let p = 0; p <= 1.0001; p += 0.01) {
      const w = evaluate({ ...base, danger: p }, FIELD_CONTEXT).winner;
      if (order[order.length - 1] !== w) order.push(w);
    }
    expect(order).toEqual(['feed', 'vigilance', 'freeze', 'flee']);
  });

  it('with no refuge, freezing replaces fleeing at high danger', () => {
    expect(evaluate({ ...base, danger: 1 }, LAB_CONTEXT).winner).not.toBe('flee');
  });

  it('removing an action never lets that action win', () => {
    const ctx: Context = { ...FIELD_CONTEXT, actions: { ...FIELD_CONTEXT.actions, flee: false } };
    expect(evaluate({ ...base, danger: 1 }, { ...ctx, refuge: 0 }).winner).not.toBe('flee');
  });

  it('same sound, different circumstances can give different winners', () => {
    const sound = { ...base, danger: 0.7 };
    const a = evaluate(sound, { ...FIELD_CONTEXT, refuge: 0.1 });
    const b = evaluate(sound, { ...FIELD_CONTEXT, refuge: 0.9 });
    expect(a.p).toBe(b.p);
    expect(a.winner).not.toBe(b.winner);
  });

  it('caller history rescales the prediction, and unreliable callers can go either way', () => {
    const s = { ...base, danger: 0.5 };
    const unk = effectiveDanger(s, { caller: 'unknown', unreliableMode: 'discount' });
    expect(effectiveDanger(s, { caller: 'reliable', unreliableMode: 'discount' })).toBeGreaterThan(unk);
    expect(effectiveDanger(s, { caller: 'unreliable', unreliableMode: 'discount' })).toBeLessThan(unk);
    expect(effectiveDanger(s, { caller: 'unreliable', unreliableMode: 'scrutinize' })).toBeGreaterThan(unk);
  });

  it('abrupt onset never changes the evaluated scores', () => {
    const quiet = evaluate({ danger: 0.5, abrupt: false }, FIELD_CONTEXT);
    const loud = evaluate({ danger: 0.5, abrupt: true }, FIELD_CONTEXT);
    expect(loud).toEqual(quiet);
  });
});
