import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { AranzmanService } from 'src/app/services/aranzman.service';
import { Aranzman } from 'src/app/models/aranzman';
import { Hotel } from 'src/app/models/hotel';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AranzmanDialogComponent } from '../dialogs/aranzman-dialog/aranzman-dialog.component';

@Component({
  selector: 'app-aranzman',
  templateUrl: './aranzman.component.html',
  styleUrls: ['./aranzman.component.css']
})
export class AranzmanComponent implements OnInit, OnDestroy {
  displayedColumns = ['id', 'ukupna_cena', 'placeno', 'datum_realizacije', 'hotel', 'turisticka_agencija', 'actions'];
  dataSource!: MatTableDataSource<Aranzman>;
  subscription!: Subscription;
  @Input() selektovanHotel!: Hotel;

  constructor(private aranzmanService: AranzmanService,
    private dialog: MatDialog,
    public snackBar: MatSnackBar) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.loadData();
  }

  ngOnChanges(): void {
    if (this.selektovanHotel.id) {
      this.loadData();
    }
  }

  loadData() {
    this.subscription = this.aranzmanService.getAranzmanByHotel(this.selektovanHotel.id)
      .subscribe({
        next: (data) => this.dataSource = data,
        error: (error) => {
          this.snackBar.open('Aranzman nema hotel', 'Zatvori', {
            duration: 2500
          }); this.dataSource = new MatTableDataSource<Aranzman>
        },
        complete: () => console.info('complete')
      })
  }
  public openDialog(flag: number, aranzman?: Aranzman) {
    const dialogRef = this.dialog.open(AranzmanDialogComponent, { data: (aranzman ? aranzman : new Aranzman()) });
    dialogRef.componentInstance.flag = flag;
    if (flag === 1) {
      dialogRef.componentInstance.data.hotel = this.selektovanHotel;
    }
    dialogRef.afterClosed()
      .subscribe(result => {
        if (result === 1) {
          this.loadData();
        }
      })
  }
}
