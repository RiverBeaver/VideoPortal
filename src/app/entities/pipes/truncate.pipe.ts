import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit = 25, ellipsis = '...') {
    return value.length > limit ? value.slice(0, limit).trim() + ellipsis : value;
  }
}