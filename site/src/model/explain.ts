// Plain-language "What changed?" text, derived from the difference between two
// evaluations. Wording is deliberately hedged: this is an illustrative model.

import type { Context, Evaluation, Sound, ActionId } from './decision';
import { effectiveDanger } from './decision';

export type ChangeKey = 'danger' | 'caller' | 'refuge' | 'food' | 'history' | 'actions' | 'preset' | 'abrupt';

export interface Snapshot {
  sound: Sound;
  ctx: Context;
  result: Evaluation;
}

const NAME: Record<ActionId, string> = {
  feed: 'keep feeding',
  vigilance: 'scanning',
  freeze: 'freezing',
  flee: 'fleeing',
};

const f2 = (x: number) => x.toFixed(2);

function biggestCostShift(prev: Evaluation, next: Evaluation) {
  let best = { id: 'feed' as ActionId, delta: 0 };
  next.scores.forEach((s, i) => {
    const d = s.cost - prev.scores[i].cost;
    if (Math.abs(d) > Math.abs(best.delta)) best = { id: s.id, delta: d };
  });
  return best;
}

export function describeChange(key: ChangeKey, prev: Snapshot, next: Snapshot): { title: string; body: string } {
  const changed = prev.result.winner !== next.result.winner;
  const w = NAME[next.result.winner];
  const verdict = changed
    ? `The highest net score moves from ${NAME[prev.result.winner]} to ${w}.`
    : `${w[0].toUpperCase()}${w.slice(1)} still has the highest net score.`;

  switch (key) {
    case 'danger': {
      const up = next.sound.danger > prev.sound.danger;
      return {
        title: 'Predicted danger changed',
        body: `${up ? 'A higher' : 'A lower'} prediction ${up ? 'raises' : 'shrinks'} the benefit of every defensive action, most for fleeing; the costs stay put. ${verdict}`,
      };
    }
    case 'caller': {
      const a = effectiveDanger(prev.sound, prev.ctx);
      const b = effectiveDanger(next.sound, next.ctx);
      return {
        title: 'Caller history changed',
        body: `The sound is the same, but the receiver's prediction moved from ${f2(a)} to ${f2(b)} because of who is calling. Experience acts on the prediction term, not on the costs. ${verdict}`,
      };
    }
    case 'refuge': {
      const far = next.ctx.refuge > prev.ctx.refuge;
      const flee = next.result.scores.find((s) => s.id === 'flee')!;
      const was = prev.result.scores.find((s) => s.id === 'flee')!;
      return {
        title: far ? 'Refuge is farther away' : 'Refuge is closer',
        body: `The predicted danger is the same, but fleeing now costs ${f2(flee.cost)} instead of ${f2(was.cost)}, so escape is ${far ? 'more' : 'less'} costly. ${verdict}`,
      };
    }
    case 'food': {
      const more = next.ctx.food > prev.ctx.food;
      const s = biggestCostShift(prev.result, next.result);
      return {
        title: more ? 'Feeding is worth more' : 'Feeding is worth less',
        body: `Every action that interrupts feeding now costs ${more ? 'more' : 'less'} (up to ${f2(Math.abs(s.delta))} for ${NAME[s.id]}). ${verdict}`,
      };
    }
    case 'history': {
      const frequent = next.ctx.history === 'frequent';
      return {
        title: frequent ? 'Alarms have been frequent' : 'Alarms have been rare',
        body: frequent
          ? `Under frequent alarms, interrupting feeding costs more per alarm, a stand-in for risk allocation. ${verdict}`
          : `With few recent alarms, interrupting feeding is cheaper. ${verdict}`,
      };
    }
    case 'actions': {
      return {
        title: 'Available actions changed',
        body: `The choice is made among whatever options exist, so changing the menu can change the winner without changing the sound or the receiver's prediction. ${verdict}`,
      };
    }
    case 'preset': {
      return {
        title: 'New circumstances',
        body: `Same sound, different circumstances: the prediction is ${f2(next.result.p)} and the costs differ. ${verdict}`,
      };
    }
    case 'abrupt': {
      return {
        title: next.sound.abrupt ? 'Abrupt onset added' : 'Abrupt onset removed',
        body: 'Rapid, stimulus-locked defense is a separate route and leaves the evaluated scores unchanged. It can occur before, and apart from, the choice shown here.',
      };
    }
  }
}
