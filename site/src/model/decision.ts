// Heuristic reading of Eq. 1 (manuscript Section 6.2):
//   a* in argmax_a [ p_t(D | x_t, k) * dL(a)  -  C(a | e_t, H_t) ]
// Illustrative only; see content/assumptions.ts.

import { ACTIONS, CALLER_SCALE, HISTORY_FOOD_WEIGHT, IGNORED_LOSS } from '../content/assumptions';

export type ActionId = 'feed' | 'vigilance' | 'freeze' | 'flee';
export type Caller = 'unknown' | 'reliable' | 'unreliable';
export type UnreliableMode = 'discount' | 'scrutinize';
export type History = 'quiet' | 'frequent';

export interface Sound {
  /** Baseline predicted danger before caller history, 0..1. */
  danger: number;
  /** Abrupt onset triggers rapid, stimulus-locked defense outside Eq. 1. */
  abrupt: boolean;
}

export interface Context {
  caller: Caller;
  unreliableMode: UnreliableMode;
  /** 0 = refuge at hand, 1 = no refuge reachable. */
  refuge: number;
  /** Value of continued feeding, 0..1. */
  food: number;
  history: History;
  /** Which defensive options exist. Feeding is always available. */
  actions: Record<ActionId, boolean>;
}

export interface ActionScore {
  id: ActionId;
  label: string;
  available: boolean;
  /** p_t * dL(a); for feeding, the food value gained. */
  benefit: number;
  /** C(a | e, H); for feeding, the expected loss from ignoring danger. */
  cost: number;
  net: number;
}

export interface Evaluation {
  p: number;
  scores: ActionScore[];
  winner: ActionId;
}

const clamp = (x: number, lo = 0, hi = 1) => Math.min(hi, Math.max(lo, x));

export function callerScale(ctx: Pick<Context, 'caller' | 'unreliableMode'>): number {
  if (ctx.caller === 'reliable') return CALLER_SCALE.reliable;
  if (ctx.caller === 'unreliable')
    return ctx.unreliableMode === 'scrutinize' ? CALLER_SCALE.unreliableScrutinize : CALLER_SCALE.unreliableDiscount;
  return CALLER_SCALE.unknown;
}

/** p_t(D | x_t, k): the receiver's current prediction, shaped by who is calling. */
export function effectiveDanger(sound: Sound, ctx: Pick<Context, 'caller' | 'unreliableMode'>): number {
  return clamp(sound.danger * callerScale(ctx));
}

export function evaluate(sound: Sound, ctx: Context): Evaluation {
  const p = effectiveDanger(sound, ctx);
  const food = clamp(ctx.food * HISTORY_FOOD_WEIGHT[ctx.history], 0, 1.35);
  const scores: ActionScore[] = ACTIONS.map((a) => {
    const available = a.id === 'feed' ? true : ctx.actions[a.id];
    const feeding = a.id === 'feed';
    // Feeding: food gained vs. expected loss from ignoring danger. Defense: loss avoided vs. cost of acting.
    const benefit = feeding ? food : p * a.avoided;
    const cost = feeding ? p * IGNORED_LOSS : a.baseCost + a.foodCost * food + a.refugeCost * ctx.refuge;
    return { id: a.id, label: a.label, available, benefit, cost, net: benefit - cost };
  });
  const open = scores.filter((s) => s.available);
  const winner = open.reduce((best, s) => (s.net > best.net + 1e-9 ? s : best), open[0]).id;
  return { p, scores, winner };
}

/** The pieces of C(a | e, H), for showing the arithmetic. */
export function costBreakdown(ctx: Context, id: ActionId) {
  const info = ACTIONS.find((a) => a.id === id)!;
  const food = clamp(ctx.food * HISTORY_FOOD_WEIGHT[ctx.history], 0, 1.35);
  return {
    base: info.baseCost,
    food: info.foodCost * food,
    refuge: info.refugeCost * ctx.refuge,
    foodWeight: info.foodCost,
    foodValue: food,
    refugeWeight: info.refugeCost,
    avoided: info.avoided,
  };
}

export const DEFAULT_SOUND: Sound = { danger: 0.5, abrupt: false };

export const ALL_ACTIONS: Record<ActionId, boolean> = { feed: true, vigilance: true, freeze: true, flee: true };

export const FIELD_CONTEXT: Context = {
  caller: 'unknown',
  unreliableMode: 'discount',
  refuge: 0.4,
  food: 0.5,
  history: 'quiet',
  actions: { ...ALL_ACTIONS },
};

/** Open ground, hungry animal, far from the burrow. */
export const EXPOSED_CONTEXT: Context = {
  ...FIELD_CONTEXT,
  refuge: 0.9,
  food: 0.8,
  actions: { ...ALL_ACTIONS },
};

/** An enclosure offers no refuge to run to. */
export const LAB_CONTEXT: Context = {
  ...FIELD_CONTEXT,
  refuge: 1,
  food: 0.3,
  actions: { ...ALL_ACTIONS },
};
