import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { Destinacija } from 'src/app/models/destinacija';
import { Hotel } from 'src/app/models/hotel';
import { DestinacijaService } from 'src/app/services/destinacija.service';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-hotel-dialog',
  templateUrl: './hotel-dialog.component.html',
  styleUrls: ['./hotel-dialog.component.css']
})
export class HotelDialogComponent {
  public flag!: number;
  public Destinacije!: Destinacija[];//ja veliko
  private subscription!: Subscription;

  constructor(public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<HotelDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Hotel,
    public hotelService: HotelService,
    public destinacijaService: DestinacijaService) { }

  ngOnInit() {
    this.subscription = this.destinacijaService.getAll().subscribe(data => { this.Destinacije = data });
  }
  
  compareTo(a: any, b: any) {
    return a.id == b.id;
  }
  public add(): void {
    this.hotelService.addHotel(this.data).subscribe(() => {
      this.snackBar.open('Uspesno dodat hotel: ' + this.data.naziv, 'OK', {
        duration: 2500
      });
    },
    (error: Error) => {
      console.log(error.name + ' ' + error.message);
      this.snackBar.open('Doslo je do greske prilikom dodavanja novog hotela. ', 'Zatvori', {
        duration: 2500
      });
    });
  }
  
  public update(): void {
    this.hotelService.updateHotel(this.data).subscribe(() => {
      this.snackBar.open('Uspesno izmenjen hotel: ' + this.data.id, 'OK', {
        duration: 2500
      });
    },
    (error: Error) => {
      console.log(error.name + ' ' + error.message);
      this.snackBar.open('Doslo je do greske prilikom izmen hotela. ', 'Zatvori', {
        duration: 2500
      });
    });
  }
  
  public delete(): void {
    this.hotelService.delete(this.data.id).subscribe(() => {
      this.snackBar.open('Uspesno obrisan hotel: ' + this.data.id, 'OK', {
        duration: 2500
      });
    },
    (error: Error) => {
    /*  console.log(error.name + ' ' + error.message);
      this.snackBar.open('Doslo je do greske prilikom brisanja hotela. ', 'Zatvori', {
        duration: 2500
      });*/
    });
  }
  

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open('Odustali ste od izmene. ', 'Zatvori', {
      duration: 1000
    })
  }
}