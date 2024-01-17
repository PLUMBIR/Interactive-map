import { Pipe, PipeTransform } from '@angular/core';
import { ICard } from '../body/best-places/card.interface';

@Pipe({
  name: 'filterPlaces',
  standalone: true
})
export class FilterPlacesPipe implements PipeTransform {

  transform(places: ICard[], search: string): ICard[] {
    return places.filter(p => p.title.toLowerCase().includes(search.toLowerCase()))
  }

}
