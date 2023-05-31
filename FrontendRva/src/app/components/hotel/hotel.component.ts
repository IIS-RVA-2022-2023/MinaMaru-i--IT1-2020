import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Hotel } from 'src/app/models/hotel';
import { HotelService } from 'src/app/services/hotel.service';
import { HotelDialogComponent } from '../dialogs/hotel-dialog/hotel-dialog.component';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent {
  subscription!: Subscription;
  displayedColumns = ['id', 'naziv', 'Broj_zvezdica', 'Opis', 'destinacija', 'actions'];
  dataSource!: MatTableDataSource<Hotel>;
  selektovanHotel1!: Hotel;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;

  constructor(private hotelService: HotelService, private dialog: MatDialog) { }

  ngOnInit(): void { this.loadData(); }
  ngOnChanges(): void { this.loadData(); }

  public loadData() {
    this.subscription = this.hotelService.getAll().subscribe(
      data => {
        this.dataSource = new MatTableDataSource(data);
        //sortiramo po ugnjezdenom obelezju
        this.dataSource.sortingDataAccessor = (row: Hotel, columnName: string): string => {

          console.log(row, columnName);
          if (columnName == "destinacija") return row.destinacija.mesto.toLocaleLowerCase();
          var columnValue = row[columnName as keyof Hotel] as unknown as string;
          return columnValue;

        }

        this.dataSource.sort = this.sort;
        //filtriranje po ugnjezdenom obelezju
        this.dataSource.filterPredicate = (data, filter: string) => {
          const accumulator = (currentTerm: any, key: string) => {
            return key === 'destinacija' ? currentTerm + data.destinacija.mesto : currentTerm + data[key as keyof Hotel];
          };
          const dataStr = Object.keys(data).reduce(accumulator, '').toLowerCase();
          const transformedFilter = filter.trim().toLowerCase();
          return dataStr.indexOf(transformedFilter) !== -1;
        };

        this.dataSource.paginator = this.paginator;
      },
      (error: Error) => {
        console.log(error.name + ' ' + error.message);
      }
    );
  }

  //iz htmla prosledjujemo ove podatke dijalogu
  openDialog(flag: number, hotel?: Hotel): void {
    const dialogRef = this.dialog.open(HotelDialogComponent, { data: (hotel ? hotel : new Hotel()) });
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

  selectRow(row: any) {
    this.selektovanHotel1 = row;
  }

  applyFilter(filterValue: any) {
    filterValue = filterValue.target.value
    filterValue = filterValue.trim();
    filterValue = filterValue.toLocaleLowerCase();
    this.dataSource.filter = filterValue; //    JaBuKa    --> JaBuKa --> jabuka
  }
}