import { createAction, props } from '@ngrx/store';
import { IAreasState } from '../models/areas.models';

export enum areasActionsType {
  update = '[AREAS] Update',
  save = '[AREAS] Save',
}

export const updateAreas = createAction(
  areasActionsType.update,
  props<IAreasState>()
);
export const saveAreas = createAction(areasActionsType.save);
