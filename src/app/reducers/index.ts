import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { AreasState, areasReducer } from './areas';
import { WizardState, wizardReducer } from './wizard';

import { environment } from '../../environments/environment';

export interface State {
  wizard: WizardState;
  areas: AreasState;
}

export const reducers: ActionReducerMap<State> = {
  wizard: wizardReducer,
  areas: areasReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
