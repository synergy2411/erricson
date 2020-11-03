import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name : 'nationalCode'
})
export class NationalCodePipe implements PipeTransform {

  transform(contactNo: number, code: string) {
    switch (code) {
      case 'US':
        return '+1 ' + contactNo;
      case 'AUS':
        return '+12 ' + contactNo;
      case 'EUR':
        return '+4 ' + contactNo;
      default:
        return '+91 ' + contactNo;
    }
  }
}
