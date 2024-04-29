import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import VideosService from '../entities/services/videos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export default class HeaderComponent {
  showSettings: boolean = false;

  constructor(
    private videoService: VideosService,
    private router: Router,
  ) {}

  submit(form: NgForm) {
    this.videoService.filterVideos(form.form.value.searchString);
    if (this.router.url !== '/') {
      this.router.navigate(['']);
    }
  }

  openOrCloseSettings() {
    this.showSettings = !this.showSettings;
  }

  goToMainPage() {
    this.router.navigate(['']);
  }
}
