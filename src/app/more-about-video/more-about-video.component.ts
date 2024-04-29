import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription, switchMap } from 'rxjs';
import Video from '../entities/classes/video.class';
import { TimeIntervals } from '../entities/enums/time-intervals.enum';
import VideosService from '../entities/services/videos.service';
import { searchVideoById, updateVideos } from '../entities/store/actions/videos.action';
import { videoSelector } from '../entities/store/selectors/video.selector';

@Component({
  selector: 'app-more-about-video',
  templateUrl: './more-about-video.component.html',
  styleUrl: './more-about-video.component.scss',
})
export default class MoreAboutVideoComponent implements OnInit, OnDestroy {
  id!: string;

  video!: Video;

  private subscriptionVideo!: Subscription;

  classColor = {};

  private video$ = this.store.select(videoSelector);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private videoService: VideosService,
    private store: Store,
  ) {}

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params) => params.getAll('id')),
    )
      .subscribe((data) => {
        if (!this.id) {
          this.store.dispatch(
            updateVideos({ videos: this.videoService.getVideoById(data) }),
          );
        }
        this.id = data;
        this.store.dispatch(searchVideoById({ id: this.id }));
      });
    this.getVideo();
  }

  getVideo() {
    this.subscriptionVideo = this.video$.subscribe({
      next: (data: Video[]) => {
        [this.video] = data;

        if (!data[0]) this.classColor = {};
        else {
          const differenceBetweenDates = Date.now() - data[0].publishedAt.getTime();
          if (differenceBetweenDates < TimeIntervals.days7) {
            this.classColor = { blue: true };
          } else if (differenceBetweenDates < TimeIntervals.month) {
            this.classColor = { green: true };
          } else if (differenceBetweenDates < TimeIntervals.month6) {
            this.classColor = { yellow: true };
          } else this.classColor = { red: true };
        }
      },
    });
  }

  goToMainPage() {
    this.router.navigate(['']);
  }

  ngOnDestroy(): void {
    this.subscriptionVideo.unsubscribe();
  }
}
