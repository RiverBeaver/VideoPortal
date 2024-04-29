import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import Video from 'src/app/entities/classes/video.class';
import { TimeIntervals } from 'src/app/entities/enums/time-intervals.enum';

@Component({
  selector: 'app-card-of-video',
  templateUrl: './card-of-video.component.html',
  styleUrls: ['./card-of-video.component.scss'],
})
export default class CardOfVideoComponent {
  @Input() video!: Video;

  private border = 'solid 5px ';

  constructor(private router: Router) {}

  getBorderBottom(date: Date): string {
    const differenceBetweenDates = Date.now() - date.getTime();
    if (differenceBetweenDates < TimeIntervals.days7) {
      return `${this.border}#2F80ED`;
    } if (differenceBetweenDates < TimeIntervals.month) {
      return `${this.border}#27AE60`;
    } if (differenceBetweenDates < TimeIntervals.month6) {
      return `${this.border}#F2C94C`;
    } return `${this.border}#EB5757`;
  }

  moreDetailed(id: string) {
    this.router.navigate([`/video/${id}`]);
  }
}
