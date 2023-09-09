import {
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';

export const increaseStep = createAction('[WIZARD] Increase Step');
export const decreaseStep = createAction('[WIZARD] Decrease Step');
export const resetStep = createAction('[WIZARD] Reset Step');

export interface WizardState {
  step: number;
}

export const initialWizardState: WizardState = {
  step: 1,
};

export const wizardReducer = createReducer(
  initialWizardState,
  on(increaseStep, (state) => ({
    ...state,
    step: state.step + 1,
  })),
  on(decreaseStep, (state) => ({
    ...state,
    step: state.step - 1,
  })),
  on(resetStep, (state) => ({
    ...state,
    step: 1,
  }))
);

export const featureSelector = createFeatureSelector<WizardState>('wizard');
export const stepSelector = createSelector(
  featureSelector,
  (state) => state.step
);
