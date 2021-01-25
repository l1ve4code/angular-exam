import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'available'
})
export class AvailablePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
