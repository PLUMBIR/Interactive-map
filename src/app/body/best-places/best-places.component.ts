import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ICard } from './card.interface';
import { FormsModule } from '@angular/forms';
import { FilterPlacesPipe } from 'src/app/pipes/filter-places.pipe';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-best-places',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    FilterPlacesPipe,
    RouterModule
  ],
  templateUrl: './best-places.component.html',
  styleUrls: ['./best-places.component.scss']
})

export class BestPlacesComponent {

  term = ''

  public cards: ICard[] = [
    {
      title: 'Card Title 1',
      imageUrl: 'https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp',
      description: 'Description for card 1',
      buttonText: 'Button 1'
    },
    {
      title: 'Card Title 2',
      imageUrl: 'https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp',
      description: 'Description for card 2',
      buttonText: 'Button 2'
    },
    {
      title: 'Card Title 3',
      imageUrl: 'https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp',
      description: 'Description for card 3',
      buttonText: 'Button 3'
    },
    {
      title: 'Card Title 1',
      imageUrl: 'https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp',
      description: 'Description for card 1',
      buttonText: 'Button 1'
    },
    {
      title: 'Card Title 2',
      imageUrl: 'https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp',
      description: 'Description for card 2',
      buttonText: 'Button 2'
    },
    {
      title: 'Card Title 3',
      imageUrl: 'https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp',
      description: 'Description for card 3',
      buttonText: 'Button 3'
    },
    {
      title: 'Card Title 1',
      imageUrl: 'https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp',
      description: 'Description for card 1',
      buttonText: 'Button 1'
    },
    {
      title: 'Card Title 2',
      imageUrl: 'https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp',
      description: 'Description for card 2',
      buttonText: 'Button 2'
    },
    {
      title: 'Card Title 3',
      imageUrl: 'https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp',
      description: 'Description for card 3',
      buttonText: 'Button 3'
    },
    {
      title: 'Card Title 1',
      imageUrl: 'https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp',
      description: 'Description for card 1',
      buttonText: 'Button 1'
    },
    {
      title: 'Card Title 2',
      imageUrl: 'https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp',
      description: 'Description for card 2',
      buttonText: 'Button 2'
    },
    {
      title: 'Card Title 3',
      imageUrl: 'https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp',
      description: 'Description for card 3',
      buttonText: 'Button 3'
    }
  ];
}
