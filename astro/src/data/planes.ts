/**
 * Real coverage plans (user-provided JSON, feature doc S4).
 * The card shows DESCRIP; PLAN is the internal code.
 */

export interface Plan {
  idplan: number;
  /** Internal code, e.g. "Ag". */
  PLAN: string;
  /** Display name, e.g. "Plan Plata". */
  DESCRIP: string;
}

export const planes: Plan[] = [
  { PLAN: 'Ag', DESCRIP: 'Plan Plata', idplan: 1 },
  { PLAN: 'Au', DESCRIP: 'Plan Oro', idplan: 2 },
  { PLAN: 'Po', DESCRIP: 'Plan Policia', idplan: 3 },
  { PLAN: 'AgT', DESCRIP: 'Plan Plata Traspaso', idplan: 4 },
  { PLAN: 'AuT', DESCRIP: 'Plan Oro Traspaso', idplan: 5 },
];
