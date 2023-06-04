import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';

import { Turisticka_agencija } from 'src/app/models/turisticka-agencija';
import { TuristickaAgencijaService } from 'src/app/services/turisticka-agencija.service';
import { TuristickaAgencijaDialogComponent } from '../dialogs/turisticka-agencija-dialog/turisticka-agencija-dialog.component';

@Component({
  selector: 'app-turisticka-agencija',
  templateUrl: './turisticka-agencija.component.html',
  styleUrls: ['./turisticka-agencija.component.css']
})


export class TuristickaAgencijaComponent {

  subscription!: Subscription;
  displayedColumns = ['id', 'naziv', 'adresa', 'kontakt', 'actions'];
  
  dataSourceTuristickaAgencija!: MatTableDataSource<Turisticka_agencija>;
  @ViewChild(MatSort, {static: false}) sort!: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator!: MatPaginator;

  constructor(private turistickaAgencijaService: TuristickaAgencijaService, private dialog: MatDialog) { }
  ngOnInit(): void { this.loadData(); }

  public loadData() {
    this.subscription = this.turistickaAgencijaService.getAllTurAgencije().subscribe(
      data => {
        //console.log(data);
        this.dataSourceTuristickaAgencija = new MatTableDataSource(data);
        this.dataSourceTuristickaAgencija.sort = this.sort;
        this.dataSourceTuristickaAgencija.paginator = this.paginator;
      },
      error => {
        console.log(error.name + ' ' + error.message);
      }
    );
  }

  public openDialog(flag: number, turistickaAgencija?: Turisticka_agencija) : void {
    const dialogRef = this.dialog.open(TuristickaAgencijaDialogComponent, {data: (turistickaAgencija?turistickaAgencija: new Turisticka_agencija())});
    dialogRef.componentInstance.flagArtDialog = flag;
    dialogRef.afterClosed().subscribe(res => {if(res==1) this.loadData();})
  }

  
  applyFilter(filterValue: any) {
    filterValue = filterValue.target.value
    filterValue = filterValue.trim();
    filterValue = filterValue.toLocaleLowerCase();
    this.dataSourceTuristickaAgencija.filter = filterValue; //    JaBuKa    --> JaBuKa --> jabuka
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnChanges() {
    this.loadData();
  }
}