import { createFeatureSelector, createSelector } from '@ngrx/store';
import { VideoState } from '../reducers/videos.reducer';

export const featureSelector = createFeatureSelector<VideoState>('videos');

export const videoSelector = createSelector(
  featureSelector,
  (state) => state.listVideos,
);
