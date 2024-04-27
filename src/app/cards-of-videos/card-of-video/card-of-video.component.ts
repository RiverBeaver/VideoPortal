import { Component, Input } from "@angular/core";
import { Video } from "src/app/entities/classes/video.class";
import { TimeIntervals } from "src/app/entities/enums/time-intervals.enum";

@Component({
  selector: 'card-of-video',
  templateUrl: './card-of-video.component.html',
  styleUrls: ['./card-of-video.component.scss']
})
export class CardOfVideoComponent {
  @Input() video!: Video;

  getBorderBottom(date: string): string {
    const differenceBetweenDates = Date.now() - (new Date(date).getTime());
    const border = 'solid 5px ';
    if (differenceBetweenDates < TimeIntervals.days7) {
      return border + '#2F80ED';
    } else if (differenceBetweenDates < TimeIntervals.month) {
      return border + '#27AE60';
    } else if (differenceBetweenDates < TimeIntervals.month6) {
      return border + '#F2C94C';
    } else return border + '#EB5757';
  }
}
