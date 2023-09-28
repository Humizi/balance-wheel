import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAreasState } from '../models/areas.models';

export const featureSelector = createFeatureSelector<IAreasState>('areas');
export const areasSelector = createSelector(featureSelector, (state) => state);
