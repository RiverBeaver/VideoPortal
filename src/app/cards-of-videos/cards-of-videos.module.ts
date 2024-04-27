import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardOfVideoComponent } from './card-of-video/card-of-video.component';
import { CardsOfVideosComponent } from './cards-of-videos.component';



@NgModule({
  declarations: [
    CardOfVideoComponent,
    CardsOfVideosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardsOfVideosComponent
  ]
})
export class CardsOfVideosModule { }
