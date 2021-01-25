import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../shared/item.model';

@Pipe({
  name: 'available'
})
export class AvailablePipe implements PipeTransform {

  transform(items: Item[], isset: boolean): Item[] {
    if (isset == false) {
      return items;
    }else{
      let isArray = [];
      for(let item of items){
        if(Number(item.amount) > 0)
          isArray.push(item);
      }
      return isArray;
    }
  }

}
