import { createReducer, on } from '@ngrx/store';
import { saveAreas, updateAreas } from '../actions/areas.actions';
import { initialAreasState } from '../initial-states/areas.state';

export const areasReducer = createReducer(
  initialAreasState,
  on(updateAreas, (state, action) => ({
    ...state,
    areas: action.areas,
  })),
  on(saveAreas, (state) => ({
    ...state,
  }))
);
