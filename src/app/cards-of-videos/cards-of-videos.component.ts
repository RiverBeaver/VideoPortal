import { Component } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Video } from "../entities/classes/video.class";
import { VideosService } from "../entities/services/videos.service";

@Component({
  selector: 'cards-of-videos',
  templateUrl: './cards-of-videos.component.html',
  styleUrls: ['./cards-of-videos.component.scss']
})
export class CardsOfVideosComponent {
  public videos$: BehaviorSubject<Video[]>;

  constructor(private videoService: VideosService) {
    this.videos$ = videoService.filteredVideos;
  }
}
