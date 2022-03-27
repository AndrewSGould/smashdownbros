import { Pipe, PipeTransform } from '@angular/core';
/*
 * Reverses the order of the supplied array
 * Usage:
 *   value | reverse
*/
@Pipe({name: 'reverse', pure: false})
export class ReversePipe implements PipeTransform {
  transform(value: Array<any> | undefined): Array<any> {
    if (value === undefined)
      return new Array();
    return value.slice().reverse();
  }
}
