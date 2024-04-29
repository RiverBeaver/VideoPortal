import { createAction, props } from '@ngrx/store';
import Video from '../../classes/video.class';

export const updateVideos = createAction('[VIDEOS] Update Videos', props<{ videos: Array<Video> }>());

export const searchVideoById = createAction('[VIDEOS] Search Video By Id', props<{ id: string }>());
