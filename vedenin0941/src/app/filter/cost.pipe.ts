import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../shared/item.model';

@Pipe({
  name: 'cost'
})
export class CostPipe implements PipeTransform {

  transform(items: Item[], cost: number): Item[] {
    if (cost == 2) {
      return items;
    }else{
      if(cost == 1){
        items.sort(function(a, b){
          return Number(a.cost) - Number(b.cost);
        });
      }
      else if(cost == 0){
        items.sort(function(a, b){
          return Number(b.cost) - Number(a.cost);
        });
      }
      return items;
    }
  }

}
