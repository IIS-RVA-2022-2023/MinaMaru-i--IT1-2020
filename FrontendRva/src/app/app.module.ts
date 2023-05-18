import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//ovo approuting nema 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TuristickaAgencijaComponent } from './components/turisticka-agencija/turisticka-agencija.component';
import { AranzmanComponent } from './components/aranzman/aranzman.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { DestinacijaComponent } from './components/destinacija/destinacija.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatIconModule} from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TuristickaAgencijaDialogComponent } from './components/dialogs/turisticka-agencija-dialog/turisticka-agencija-dialog.component';
import { DestinacijaDialogComponent } from './components/dialogs/destinacija-dialog/destinacija-dialog.component';


import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    TuristickaAgencijaComponent,
    AranzmanComponent,
    HotelComponent,
    DestinacijaComponent,
    TuristickaAgencijaDialogComponent,
    DestinacijaDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSidenavModule, 
    MatListModule,
    MatGridListModule,
    MatExpansionModule,
    HttpClientModule,
    MatTableModule,
    MatToolbarModule,
    MatToolbarModule,
    MatDialogModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
