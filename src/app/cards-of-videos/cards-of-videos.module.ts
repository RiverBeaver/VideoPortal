import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TruncatePipe } from '../entities/pipes/truncate.pipe';

import { CardOfVideoComponent } from './card-of-video/card-of-video.component';
import { CardsOfVideosComponent } from './cards-of-videos.component';



@NgModule({
  declarations: [
    CardOfVideoComponent,
    CardsOfVideosComponent,
    TruncatePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardsOfVideosComponent
  ]
})
export class CardsOfVideosModule { }
