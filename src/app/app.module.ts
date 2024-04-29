import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgxPaginationModule } from 'ngx-pagination';
import { reducers, metaReducers } from './entities/store/index';
import AppRoutingModule from './app-routing.module';
import AppComponent from './app.component';
import CardsOfVideosModule from './cards-of-videos/cards-of-videos.module';
import VideosService from './entities/services/videos.service';
import HeaderModule from './header/header.module';
import MoreAboutVideoModule from './more-about-video/more-about-video.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    NgxPaginationModule,
    BrowserModule,
    AppRoutingModule,
    CardsOfVideosModule,
    HeaderModule,
    MoreAboutVideoModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [VideosService],
  bootstrap: [AppComponent],
})
export default class AppModule {}
