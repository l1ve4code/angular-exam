import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../shared/item.model';
@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(items: Item[], category: string): Item[] {
    if (!category || category == "") {
      return items;
    }else{
      let catArray = [];
      for(let item of items){
        if(item.category == category)
          catArray.push(item);
      }
      return catArray;
    }
  }

}
