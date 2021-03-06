import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string): any {
    if (value.length == 0 || filterString == "") {
      return value;
    }
    console.log(value);
    console.log(filterString);
    var resultArray = [];
    for (const item of value) {
      if (item['color'] == filterString) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }
}
