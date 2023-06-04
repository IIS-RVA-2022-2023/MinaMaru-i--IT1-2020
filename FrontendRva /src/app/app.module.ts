import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//ovo approuting nema 

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
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { TuristickaAgencijaDialogComponent } from './components/dialogs/turisticka-agencija-dialog/turisticka-agencija-dialog.component';
import { DestinacijaDialogComponent } from './components/dialogs/destinacija-dialog/destinacija-dialog.component';
import { AranzmanDialogComponent } from './components/dialogs/aranzman-dialog/aranzman-dialog.component';

import { HotelDialogComponent } from './components/dialogs/hotel-dialog/hotel-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    TuristickaAgencijaComponent,
    AranzmanComponent,
    HotelComponent,
    DestinacijaComponent,
    TuristickaAgencijaDialogComponent,
    DestinacijaDialogComponent,
    HotelDialogComponent,
    AranzmanDialogComponent
  ],
 
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatIconModule,
    MatSidenavModule, 
    MatListModule,
    MatGridListModule,
    MatExpansionModule,
    HttpClientModule,
    MatTableModule,
    MatToolbarModule,
    MatDialogModule,
    MatSnackBarModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatSelectModule,
    MatNativeDateModule,
    MatSortModule,
    MatPaginatorModule
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
