import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IWizardState } from '../models/wizard.models';

export const featureSelector = createFeatureSelector<IWizardState>('wizard');
export const wizardSelector = createSelector(
  featureSelector,
  (state) => state.step
);
