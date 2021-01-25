import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Marker } from '../../classes/marker.class';

@Component({
  selector: 'app-map-edit',
  templateUrl: './map-edit.component.html',
  styleUrls: ['./map-edit.component.css']
})
export class MapEditComponent implements OnInit {

  customForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<MapEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.customForm = formBuilder.group({
        title: data.title,
        desc: data.desc
      });
      console.log(data);
    }

  ngOnInit(): void {
  }

  saveChanges(): void {
    // console.log(this.customForm.value);
    this.dialogRef.close(this.customForm.value);

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
