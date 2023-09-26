import {
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
  props,
} from '@ngrx/store';

export const updateAreas = createAction('[AREAS] Update', props<AreasState>());
export const saveAreas = createAction('[AREAS] Save');

export interface AreasState {
  areas: {
    title: string | null;
    point: number | null;
    color: string | null;
    grade_1_desc: string | null;
    grade_10_desc: string | null;
    grade_current_desc: string | null;
    grade_next_desc: string | null;
  }[];
}

export const initialAreasState: AreasState = {
  areas: [
    {
      title: 'Здоровье',
      point: 3,
      color: '#87F03C',
      grade_1_desc: 'Norm',
      grade_10_desc: 'Norm',
      grade_current_desc: 'Norm',
      grade_next_desc: 'Norm',
    },
    {
      title: 'Работа',
      point: 7,
      color: '#0B5FA5',
      grade_1_desc: 'Norm',
      grade_10_desc: 'Norm',
      grade_current_desc: 'Norm',
      grade_next_desc: 'Norm',
    },
    {
      title: 'Финансы',
      point: 7,
      color: '#2B8E00',
      grade_1_desc: 'Norm',
      grade_10_desc: 'Norm',
      grade_current_desc: 'Norm',
      grade_next_desc: 'Norm',
    },
    {
      title: 'Отношения',
      point: 10,
      color: '#F03C79',
      grade_1_desc: 'Norm',
      grade_10_desc: 'Norm',
      grade_current_desc: 'Norm',
      grade_next_desc: 'Norm',
    },
    {
      title: 'Друзья',
      point: 9,
      color: '#FF8940',
      grade_1_desc: 'Norm',
      grade_10_desc: 'Norm',
      grade_current_desc: 'Norm',
      grade_next_desc: 'Norm',
    },
    {
      title: 'Саморазвитие',
      point: 4,
      color: '#F10026',
      grade_1_desc: 'Norm',
      grade_10_desc: 'Norm',
      grade_current_desc: 'Norm',
      grade_next_desc: 'Norm',
    },
    {
      title: 'Творчество',
      point: 1,
      color: '#FFEC40',
      grade_1_desc: 'Norm',
      grade_10_desc: 'Norm',
      grade_current_desc: 'Norm',
      grade_next_desc: 'Norm',
    },
    {
      title: 'Отдых',
      point: 2,
      color: '#3BA3D0',
      grade_1_desc: 'Norm',
      grade_10_desc: 'Norm',
      grade_current_desc: 'Norm',
      grade_next_desc: 'Norm',
    },
  ],
};

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

export const featureSelector = createFeatureSelector<AreasState>('areas');
export const areasSelector = createSelector(featureSelector, (state) => state);
