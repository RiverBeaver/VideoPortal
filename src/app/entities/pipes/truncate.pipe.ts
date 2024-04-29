import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export default class TruncatePipe implements PipeTransform {
  ellipsis: string = '...';

  transform(value: string, limit = 25) {
    return value.length > limit ? value.slice(0, limit).trim() + this.ellipsis : value;
  }
}
