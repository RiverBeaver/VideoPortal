import { Component } from '@angular/core';
import { NgForm} from "@angular/forms"
import { VideosService } from '../entities/services/videos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  showSettings: boolean = false;

  constructor(private videoService: VideosService) {
    // console.log(videoService.allVideos)
  }

  submit(form: NgForm) {
    console.log(form.form.value);
    this.videoService.filterVideos(form.form.value.searchString);
  }

  openOrCloseSettings() {
    this.showSettings = !this.showSettings;
  }
}
