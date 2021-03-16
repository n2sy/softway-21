import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'short'
})
export class ShortPipe implements PipeTransform {

  transform(value: string, maxLength : number): string {
    if(value.length >= maxLength)
      return value.slice(0,maxLength) + '...';
    else
      return value;
  }

}
