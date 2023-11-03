import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchNote'
})
export class SearchNotePipe implements PipeTransform {

  transform(value: any[], myValue: string): any[] {
    myValue = myValue.toLowerCase();
    if(!myValue)
    {
      return value;
    }

    return value.filter((note:any) => note.tittle.toLowerCase().includes(myValue) ||  note.note.toLowerCase().includes(myValue));

    
  }

}
