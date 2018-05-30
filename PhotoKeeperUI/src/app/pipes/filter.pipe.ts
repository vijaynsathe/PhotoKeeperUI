import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(record: any, term: any): any {
    //check if search term is undefined
    if (term === undefined) return record;
    
    //return updated filter rentals
    return record.filter(item => {
      return item["title"].toLowerCase().includes(term.toLowerCase());      
    });
  }
}
