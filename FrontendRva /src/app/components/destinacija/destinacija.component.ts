import { Component,ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
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

  @ViewChild(MatSort, {static: false}) sort!: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator!: MatPaginator;

  constructor(private destinacijaService: DestinacijaService, private dialog: MatDialog) { }

  ngOnInit(): void { this.loadData(); }
 
 

  public loadData() {
    this.subscription = this.destinacijaService.getAll().subscribe(
      data => {
        //console.log(data);
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      
      },
      (error: Error) => {
        console.log(error.name + ' ' + error.message);
      }
    );
  }

  //iz htmla prosledjujemo ove podatke dijalogu
  public openDialog(flag: number, destinacija?: Destinacija) : void {
    const dialogRef = this.dialog.open(DestinacijaDialogComponent, {data: (destinacija?destinacija: new Destinacija())});
    dialogRef.componentInstance.flag= flag;
    dialogRef.afterClosed().subscribe(res => {if(res==1) this.loadData();})
  }
  

  applyFilter(filterValue: any) {
    filterValue = filterValue.target.value
    filterValue = filterValue.trim();
    filterValue = filterValue.toLocaleLowerCase();
    this.dataSource.filter = filterValue; //    JaBuKa    --> JaBuKa --> jabuka
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  ngOnChanges(): void { this.loadData(); }

}

