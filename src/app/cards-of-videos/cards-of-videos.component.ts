import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import Video from '../entities/classes/video.class';
import Helper from '../entities/helper';
import VideosService from '../entities/services/videos.service';
import { updateVideos } from '../entities/store/actions/videos.action';
import { videoSelector } from '../entities/store/selectors/video.selector';

@Component({
  selector: 'app-cards-of-videos',
  templateUrl: './cards-of-videos.component.html',
  styleUrls: ['./cards-of-videos.component.scss'],
})
export default class CardsOfVideosComponent implements OnInit, OnDestroy {
  page:number = 1;

  count:number = 0;

  tableSize:number = 20;

  private videos$ = this.store.select(videoSelector);

  public videos!: Video[];

  private subscriptionFiltered!: Subscription;

  private subscriptionVideos!: Subscription;

  constructor(
    private videoService: VideosService,
    private store: Store,
  ) {}

  ngOnInit(): void {
    this.subscriptionFiltered = this.videoService.filteredVideos$.subscribe({
      next: (data: Video[]) => {
        this.count = data.length;
        this.store.dispatch(updateVideos({ videos: data.slice(0, 20) }));
      },
    });
    this.subscriptionVideos = this.videos$.subscribe({
      next: (data: Video[]) => {
        this.videos = data;
      },
    });
  }

  onTableDataChange(e: number) {
    this.page = e;
    const videos = this.videoService.filteredVideos$.getValue();
    this.store.dispatch(updateVideos({ videos: videos.slice(20 * (e - 1), 20 * e) }));
  }

  scrollToTop = Helper.scrollToTop;

  ngOnDestroy(): void {
    this.subscriptionFiltered.unsubscribe();
    this.subscriptionVideos.unsubscribe();
  }
}
