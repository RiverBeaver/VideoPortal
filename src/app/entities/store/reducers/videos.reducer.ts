import { createReducer, on } from '@ngrx/store';
import Video from '../../classes/video.class';
import * as VideosAction from '../actions/videos.action';

export interface VideoState {
  listVideos: Video[];
}

export const initialState: VideoState = {
  listVideos: [],
};

export const videosdReducer = createReducer(
  initialState,
  on(VideosAction.updateVideos, (state, { videos }) => ({ ...state, listVideos: videos })),
  on(VideosAction.searchVideoById, (state, { id }) => ({
    ...state,
    listVideos: state.listVideos?.filter((video: Video) => video.id === id),
  })),
);
