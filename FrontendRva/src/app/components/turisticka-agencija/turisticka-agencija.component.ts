import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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
  dataSource!: MatTableDataSource<Turisticka_agencija>;

  constructor(private turistickaAgencijaService: TuristickaAgencijaService, private dialog: MatDialog) { }
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

  public openDialog(flag: number, turistickaAgencija?: Turisticka_agencija) : void {
    const dialogRef = this.dialog.open(TuristickaAgencijaDialogComponent, {data: (turistickaAgencija?turistickaAgencija: new Turisticka_agencija())});
    dialogRef.componentInstance.flagArtDialog = flag;
    dialogRef.afterClosed().subscribe(res => {if(res==1) this.loadData();})
  }

  
  ngOnChanges(){this.loadData();}
  ngOnDestroy(): void { this.subscription.unsubscribe(); }
}