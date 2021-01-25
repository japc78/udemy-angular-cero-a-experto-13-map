import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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

  constructor(private snackBar: MatSnackBar) {
    // const newMarker = new Marker(51.678418 , 7.809007);
    // this.markers.push(newMarker);

    // Leer los marcadores
    if (localStorage.getItem('markers')) {
      this.markers = JSON.parse(localStorage.getItem('markers'));
    }
  }

  ngOnInit(): void {
  }

  addMarker(e: any): void {
    const coords: { lat: number, lng: number} = e.coords;
    // console.log(e);
    const newMarker = new Marker(coords.lat, coords.lng);
    this.markers.push(newMarker);
    this.saveAtLocalStorage();
    // Simple message with an action.
    this.snackBar.open('Marker Added', 'close', {duration: 3000});
  }

  delMarker(idx: number ): void {
    this.markers.splice(idx, 1);
    this.saveAtLocalStorage();
    this.snackBar.open('Marker deleted', 'close', {duration: 3000});
  }

  private saveAtLocalStorage(): void {
    localStorage.setItem('markers', JSON.stringify(this.markers));
  }
}
