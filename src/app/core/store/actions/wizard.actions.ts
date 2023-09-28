import { createAction } from '@ngrx/store';

export enum wizardActionsType {
  increase = '[WIZARD] Increase Step',
  decrease = '[WIZARD] Decrease Step',
  reset = '[WIZARD] Reset Step',
}

export const increaseStep = createAction(wizardActionsType.increase);
export const decreaseStep = createAction(wizardActionsType.decrease);
export const resetStep = createAction(wizardActionsType.reset);
