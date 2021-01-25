import { Component, OnInit } from '@angular/core';
import { Marker } from 'src/app/classes/marker.class';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  markers: Marker[] = [];

  lat = 51.678418;
  lng = 7.809007;

  constructor() {
    const newMarker = new Marker(51.678418 , 7.809007);
    this.markers.push(newMarker);
  }

  ngOnInit(): void {
  }

  addMarker(e: any): void {
    const coords: { lat: number, lng: number} = e.coords;
    // console.log(e);
    const newMarker = new Marker(coords.lat, coords.lng);
    this.markers.push(newMarker);
  }
}
