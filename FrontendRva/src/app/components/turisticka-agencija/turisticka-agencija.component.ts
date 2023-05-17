import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Turisticka_agencija } from 'src/app/models/turisticka-agencija';
import { TuristickaAgencijaService } from 'src/app/services/turisticka-agencija.service';

@Component({
  selector: 'app-turisticka-agencija',
  templateUrl: './turisticka-agencija.component.html',
  styleUrls: ['./turisticka-agencija.component.css']
})


export class TuristickaAgencijaComponent {

  subscription!: Subscription;
  displayedColumns = ['id', 'naziv', 'adresa', 'kontakt', 'actions'];
  dataSource!: MatTableDataSource<Turisticka_agencija>;

  constructor(private turistickaAgencijaService: TuristickaAgencijaService) { }

  ngOnInit(): void { this.loadData(); }

  public loadData() {
    this.subscription = this.turistickaAgencijaService.getAllTurAgencije().subscribe(
      data => {
        //console.log(data);
        this.dataSource = new MatTableDataSource(data);
      },
      error => {
        console.log(error.name + ' ' + error.message);
      }
    );
  }

  
  ngOnDestroy(): void { this.subscription.unsubscribe(); }
}