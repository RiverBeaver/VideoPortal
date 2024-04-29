import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import CardsOfVideosComponent from './cards-of-videos/cards-of-videos.component';
import ErrorComponent from './error/error.component';
import MoreAboutVideoComponent from './more-about-video/more-about-video.component';

const routes: Routes = [
  { path: '', component: CardsOfVideosComponent },
  { path: 'video/:id', component: MoreAboutVideoComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 64],
  })],
  exports: [RouterModule],
})
export default class AppRoutingModule { }
