import { Component } from '@angular/core';
import VideosService from 'src/app/entities/services/videos.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
})
export default class SettingsComponent {
  sortingBy: string = '';

  sortingOrder: number = 1;

  constructor(private videoService: VideosService) {}

  changeSort(event: Event) {
    this.sortingBy = (event.target as HTMLInputElement).value;
    this.videoService.setSortingValues(this.sortingBy, this.sortingOrder);
  }

  changeSortingOrder() {
    this.sortingOrder = -this.sortingOrder;
    if (this.sortingBy) {
      this.videoService.setSortingValues(this.sortingBy, this.sortingOrder);
    }
  }
}
