import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'preparationTime'
})
export class PreparationTimePipe implements PipeTransform {

  transform(value: number | undefined): unknown {
    if (!value) return '';
    const numberOfHours = Math.floor(value / 60);
    const numberOfMinutes = value - (numberOfHours * 60);
    return numberOfHours + 'h ' + numberOfMinutes + 'm';
  }

}
