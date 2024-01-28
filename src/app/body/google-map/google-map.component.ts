import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GoogleMapsModule} from "@angular/google-maps";

@Component({
  selector: 'app-google-map',
  standalone: true,
  imports: [
    CommonModule,
    GoogleMapsModule
  ],
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent {
  zoom = 7.1;
  center: google.maps.LatLngLiteral = {
    lat: 53.7098,
    lng: 27.9534,
  };

  bounds: google.maps.LatLngBoundsLiteral = {
    north: 56.1655,
    south: 51.2565,
    west: 23.1785,
    east: 32.7209,
  };

  options: google.maps.MapOptions = {
    disableDoubleClickZoom: true,
    fullscreenControl: false,
    zoomControl: false,
    keyboardShortcuts: false,
    clickableIcons: false,
    mapTypeControl: false,
    restriction: {
      latLngBounds: this.bounds,
      strictBounds: false,
    },
    scrollwheel: true,
    minZoom: 7.1,
  };
}


