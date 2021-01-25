import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapComponent } from './components/map/map.component';
import { AgmCoreModule } from '@agm/core';


import { MaterialModule } from './material.module';
import { MapEditComponent } from './components/map/map-edit.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MapEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAZ3psui8eHKt3sxO7t_Q6zkdgDK-i-CNc'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
