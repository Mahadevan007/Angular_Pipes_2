import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mobileNumber'
})
export class MobileNumberPipe implements PipeTransform {

  transform(value: string): string {

    let cleaned = ('' + value).replace(/\D/g, '');
    console.log(cleaned);
    let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    console.log(match);
    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3]
    };

    return null
  }

}
