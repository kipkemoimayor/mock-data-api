import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (value < 10) {
      return value + ' (weak)';
    } else if (value > 10 && value < 20) {
      return value + " (strong)";
    } else {
      return value + '(unbelievable)';
    }
  }

}
