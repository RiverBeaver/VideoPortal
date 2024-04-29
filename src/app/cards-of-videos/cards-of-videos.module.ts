import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import TruncatePipe from '../entities/pipes/truncate.pipe';

import CardOfVideoComponent from './card-of-video/card-of-video.component';
import CardsOfVideosComponent from './cards-of-videos.component';

@NgModule({
  declarations: [
    CardOfVideoComponent,
    CardsOfVideosComponent,
    TruncatePipe,

  ],
  imports: [
    NgxPaginationModule,
    CommonModule,
  ],
  exports: [
    CardsOfVideosComponent,
  ],
})
export default class CardsOfVideosModule { }
