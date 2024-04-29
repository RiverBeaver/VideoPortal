import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import MoreAboutVideoComponent from './more-about-video.component';
import ErrorModule from '../error/error.module';

@NgModule({
  declarations: [
    MoreAboutVideoComponent,
  ],
  imports: [
    CommonModule,
    ErrorModule,
  ],
  exports: [
    MoreAboutVideoComponent,
  ],
})
export default class MoreAboutVideoModule { }
