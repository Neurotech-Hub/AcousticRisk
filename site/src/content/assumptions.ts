// Illustrative constants for the Explore a Decision module.
//
// These numbers are NOT fitted to data and carry no biological calibration.
// They are chosen so that the *direction* of each effect matches the
// manuscript's argument (Section 6.2, Eq. 1): higher predicted danger raises
// the benefit of every defensive action; costs depend on context (food,
// refuge) and recent history; fast stimulus-locked defense sits outside the
// expression. Change them here and the whole module updates.

import type { ActionId } from '../model/decision';

export interface ActionInfo {
  id: ActionId;
  label: string;
  /** Loss avoided relative to doing nothing, Delta L(a), at p = 1. */
  avoided: number;
  /** Constant part of the cost of acting. */
  baseCost: number;
  /** Cost per unit of food value (feeding interrupted by acting). */
  foodCost: number;
  /** Cost per unit of distance to refuge (exposure while moving). */
  refugeCost: number;
  blurb: string;
}

export const ACTIONS: ActionInfo[] = [
  {
    id: 'feed',
    label: 'Keep feeding',
    avoided: 0,
    baseCost: 0,
    foodCost: 0,
    refugeCost: 0,
    blurb: 'Keeps the food coming, but accepts whatever danger is real.',
  },
  {
    id: 'vigilance',
    label: 'Scan (vigilance)',
    avoided: 0.35,
    baseCost: 0.03,
    foodCost: 0.18,
    refugeCost: 0,
    blurb: 'Buys information at the price of feeding time.',
  },
  {
    id: 'freeze',
    label: 'Freeze',
    avoided: 0.65,
    baseCost: 0.08,
    foodCost: 0.4,
    refugeCost: 0,
    blurb: 'Stops feeding entirely; cheap in energy, exposed if refuge is far.',
  },
  {
    id: 'flee',
    label: 'Flee to refuge',
    avoided: 1,
    baseCost: 0.15,
    foodCost: 0.35,
    refugeCost: 0.6,
    blurb: 'Largest loss avoided, but the cost grows with distance to refuge.',
  },
];

/**
 * Keep feeding is scored on its own terms: its benefit is the food value gained by carrying on, and its
 * cost is the expected loss from ignoring a real danger (predicted danger x IGNORED_LOSS). Both are in the
 * same arbitrary units as the defensive actions' constants above.
 */
export const IGNORED_LOSS = 1;

/** How a caller's history rescales the receiver's prediction of danger (the p term). */
export const CALLER_SCALE = {
  unknown: 1,
  reliable: 1.25,
  unreliableDiscount: 0.55,
  unreliableScrutinize: 1.2,
} as const;

/** Recent alarm history H_t: frequent alarms raise the cost of interrupting feeding. */
export const HISTORY_FOOD_WEIGHT = { quiet: 1, frequent: 1.35 } as const;

export const ASSUMPTION_NOTES: string[] = [
  'Keep feeding is scored on its own terms: its benefit is the food value gained by carrying on, and its cost is predicted danger times the loss from ignoring a real danger. The defensive actions use the columns in the table above.',
  'Delta L(a) rises from scanning to freezing to fleeing; the values are arbitrary but ordered.',
  'Cost = base + food value x feeding interrupted + distance to refuge x exposure (flight only).',
  'A reliable caller scales the prediction up; an unreliable one scales it down (as in juvenile ground squirrels) or up (as in marmots). The manuscript reports both directions, so the direction is a choice here.',
  'Frequent recent alarms raise the cost of interrupting feeding, a stand-in for risk allocation.',
  'Rapid acoustic defense (startle, flinch) is drawn outside the expression and never added to the scores.',
  'The winner is the available action with the highest net score. This is a teaching device: animals are not claimed to compute an optimum.',
];
