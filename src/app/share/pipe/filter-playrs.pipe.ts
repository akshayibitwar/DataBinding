import { Pipe, PipeTransform } from '@angular/core';
import { Iplayers } from '../model/players';

@Pipe({
  name: 'filterPlayrs'
})
export class FilterPlayrsPipe implements PipeTransform {

  transform(value: Iplayers[], searchString : string): Iplayers[] {
    if(!value){
      return []
    }

    if(!searchString){
      return value;
    }

    let filterArray = value.filter(playerObj => {
        console.log(playerObj);
        return playerObj.Name.toLowerCase().includes(searchString.toLowerCase())
        
    })
    return filterArray;
}
};