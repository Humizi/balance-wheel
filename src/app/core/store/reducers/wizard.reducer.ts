import { createReducer, on } from '@ngrx/store';
import {
  decreaseStep,
  increaseStep,
  resetStep,
} from '../actions/wizard.actions';
import { initialWizardState } from '../initial-states/wizard.state';

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
