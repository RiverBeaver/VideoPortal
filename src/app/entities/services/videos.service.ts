import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import data from '../../../assets/json/response.json';
import { Video } from '../classes/video.class';

@Injectable({
  providedIn: 'root'
})
export class VideosService {
  private _allVideos: Video[] = [];
  public numberAllVideos: number = 0;
  public filteredVideos = new BehaviorSubject<Video[]>([]);

  constructor() {
    data.items.forEach(elem => {
      this._allVideos.push(new Video(
        elem.id, 
        elem.snippet.title, 
        elem.snippet.description,
        elem.snippet.publishedAt,
        elem.snippet.thumbnails.medium.url,
        elem.snippet.tags,
        elem.statistics));
    });
    this.numberAllVideos = this._allVideos.length;
  }

  filterVideos(searchString: string) {
    if (searchString) {
      this.filteredVideos.next(
        this._allVideos.filter((video: Video) => video.titel.toLowerCase().includes(searchString.toLowerCase()))
        );
    } else {
      this.filteredVideos.next([]);
    }
    
  }
}
