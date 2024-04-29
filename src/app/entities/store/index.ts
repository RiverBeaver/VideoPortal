import { isDevMode } from '@angular/core';
import {
  ActionReducerMap,
  MetaReducer,
} from '@ngrx/store';
import { videosdReducer, VideoState } from './reducers/videos.reducer';

export interface State {
  videos: VideoState,
}

export const reducers: ActionReducerMap<State> = {
  videos: videosdReducer,
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
