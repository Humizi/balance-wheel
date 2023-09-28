import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { areasReducer } from './areas.reducer';
import { wizardReducer } from './wizard.reducer';

import { environment } from '../../../../environments/environment';
import { IAreasState } from '../models/areas.models';
import { IWizardState } from '../models/wizard.models';

export interface IState {
  wizard: IWizardState;
  areas: IAreasState;
}

export const reducers: ActionReducerMap<IState> = {
  wizard: wizardReducer,
  areas: areasReducer,
};

export const metaReducers: MetaReducer<IState>[] = !environment.production
  ? []
  : [];
