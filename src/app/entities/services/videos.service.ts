import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import data from '../../../assets/json/response.json';
import Video from '../classes/video.class';

@Injectable({
  providedIn: 'root',
})
export default class VideosService {
  public numberAllVideos: number = 0;

  public filteredVideos$ = new BehaviorSubject<Video[]>([]);

  private allVideos: Video[] = [];

  private sortingOrder: number = 1;

  private sortingBy: string = '';

  constructor() {
    data.items.forEach((elem) => {
      this.allVideos.push(new Video(
        elem.id,
        elem.snippet.title,
        elem.snippet.description,
        new Date(elem.snippet.publishedAt),
        elem.snippet.thumbnails.maxres.url,
        elem.statistics,
      ));
    });
    this.numberAllVideos = this.allVideos.length;
  }

  filterVideos(searchString: string) {
    if (searchString) {
      this.filteredVideos$.next(
        this.allVideos.filter((video: Video) => video.titel.toLowerCase()
          .includes(searchString.toLowerCase())),
      );
      this.sortingVideos();
    }
  }

  getVideoById(id: string): Video[] {
    return this.allVideos.filter((video: Video) => video.id === id);
  }

  setSortingValues(sortingBy: string, sortingOrder: number) {
    this.sortingBy = sortingBy;
    this.sortingOrder = sortingOrder;
    this.sortingVideos();
  }

  private sortingVideos() {
    switch (this.sortingBy) {
      case 'date':
        if (this.sortingOrder !== 1) {
          this.filteredVideos$.next(this.filteredVideos$.getValue()
            .sort((a, b) => (a.publishedAt.getTime()) - (b.publishedAt.getTime())));
        } else {
          this.filteredVideos$.next(this.filteredVideos$.getValue()
            .sort((a, b) => (b.publishedAt.getTime()) - (a.publishedAt.getTime())));
        }
        break;
      case 'count-of-views':
        if (this.sortingOrder !== 1) {
          this.filteredVideos$.next(this.filteredVideos$.getValue()
            .sort((a, b) => +a.statistics.viewCount - +b.statistics.viewCount));
        } else {
          this.filteredVideos$.next(this.filteredVideos$.getValue()
            .sort((a, b) => +b.statistics.viewCount - +a.statistics.viewCount));
        }
        break;
      default:
    }
  }
}
