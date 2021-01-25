import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Marker } from 'src/app/classes/marker.class';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MapEditComponent } from './map-edit.component';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  markers: Marker[] = [];

  lat = 51.678418;
  lng = 7.809007;

  constructor(
      private snackBar: MatSnackBar,
      public dialog: MatDialog ) {
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

  editMarker(marker: Marker): void {
    const dialogRef = this.dialog.open( MapEditComponent, {
      width: '250px',
      data: { title: marker.title, desc: marker.desc }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // console.log(result);

      if (!result) {
        return;
      }
      marker.title = result.title;
      marker.desc = result.desc;

      this.saveAtLocalStorage();
      this.snackBar.open('Marker update correctly', 'close', {duration: 3000});
    });
  }

  private saveAtLocalStorage(): void {
    localStorage.setItem('markers', JSON.stringify(this.markers));
  }
}
