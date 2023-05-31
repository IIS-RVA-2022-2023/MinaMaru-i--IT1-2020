
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { TuristickaAgencijaComponent } from './components/turisticka-agencija/turisticka-agencija.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { DestinacijaComponent } from './components/destinacija/destinacija.component';
import { AranzmanComponent } from './components/aranzman/aranzman.component';

const routes: Routes = [{ path: 'turisticka-agencija', component: TuristickaAgencijaComponent},   
{ path: 'destinacija', component: DestinacijaComponent },
{ path: 'hotel', component: HotelComponent },
{ path: 'aranzman', component:AranzmanComponent},
{ path: '', redirectTo: '/turisticka-agenciija', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


