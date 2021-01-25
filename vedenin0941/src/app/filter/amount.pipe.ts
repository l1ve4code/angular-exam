import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../shared/item.model';

@Pipe({
  name: 'amount'
})
export class AmountPipe implements PipeTransform {

  transform(items: Item[], amount: number): Item[] {
    if (amount == 2) {
      return items;
    }else{
      if(amount == 1){
        items.sort(function(a, b){
          return Number(a.amount) - Number(b.amount);
        });
      }
      else if(amount == 0){
        items.sort(function(a, b){
          return Number(b.amount) - Number(a.amount);
        });
      }
      return items;
    }
  }

}
