import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsOfVideosModule } from './cards-of-videos/cards-of-videos.module';
import { VideosService } from './entities/services/videos.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardsOfVideosModule
  ],
  providers: [VideosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
