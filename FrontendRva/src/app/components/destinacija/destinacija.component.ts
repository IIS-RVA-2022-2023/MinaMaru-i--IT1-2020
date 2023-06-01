import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Destinacija } from 'src/app/models/destinacija';
import { DestinacijaService } from 'src/app/services/destinacija.service';
import { DestinacijaDialogComponent } from '../dialogs/destinacija-dialog/destinacija-dialog.component';

@Component({
  selector: 'app-destinacija',
  templateUrl: './destinacija.component.html',
  styleUrls: ['./destinacija.component.css']
})
export class DestinacijaComponent {
  subscription!: Subscription;
  displayedColumns = ['id', 'mesto', 'drzava', 'opis', 'actions'];
  dataSource!: MatTableDataSource<Destinacija>;

  constructor(private destinacijaService: DestinacijaService, private dialog: MatDialog) { }

  ngOnInit(): void { this.loadData(); }
  ngOnChanges(): void { this.loadData(); }
  /*ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }*/

  public loadData() {
    this.subscription = this.destinacijaService.getAll().subscribe(
      data => {
        //console.log(data);
        this.dataSource = new MatTableDataSource(data);
      },
      (error: Error) => {
        console.log(error.name + ' ' + error.message);
      }
    );
  }

  //iz htmla prosledjujemo ove podatke dijalogu
  openDialog(flag: number, destinacija?: Destinacija): void {
    const dialogRef = this.dialog.open(DestinacijaDialogComponent, { data: (destinacija ? destinacija : new Destinacija()) });
    //otvara modalni dijalog odgovarajuće komponente
    //vracamo instancu keirane komponente dialoga
    dialogRef.componentInstance.flag = flag;
    dialogRef.afterClosed().subscribe(res => {
      if (res === 1) //uspesno 
      {
        //ponovo učitaj podatke
        this.loadData();
      }
    })
  }
}

