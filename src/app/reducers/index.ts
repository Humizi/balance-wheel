import {
  ActionReducer,
  ActionReducerMap,
  MetaReducer,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { WizardState, wizardReducer } from './wizard';

import { environment } from '../../environments/environment';

export interface State {
  wizard: WizardState;
}

export const reducers: ActionReducerMap<State> = {
  wizard: wizardReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
