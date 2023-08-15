
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Destinacija } from 'src/app/models/destinacija';
import { DestinacijaService } from 'src/app/services/destinacija.service';

@Component({
  selector: 'app-destinacija-dialog',
  templateUrl: './destinacija-dialog.component.html',
  styleUrls: ['./destinacija-dialog.component.css']
})
export class DestinacijaDialogComponent {
  public flag!: number;

  constructor(public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<DestinacijaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Destinacija,
    public destinacijaService: DestinacijaService) {  }

  public add(): void {
   // console.log("ID je " + this.data.id + this.data.mesto);
    this.destinacijaService.addDestinacija(this.data).subscribe(() => {
      this.snackBar.open('Uspesno dodata destinacija: ' + this.data.mesto, 'OK', {
        duration: 2500
      })
    }),
      (error: Error) => {
        console.log(error.name + ' ' + error.message)
        this.snackBar.open('Doslo je do greske prilikom dodavanja nove destinacije. ', 'Zatvori', {
          duration: 2500
        })
      };
  }
public update(): void {   
    this.destinacijaService.updateDestinacija(this.data).subscribe(() => {
      this.snackBar.open('Uspesno izmenjeni podaci o  destinaciji: ' + this.data.mesto, 'OK', {
        duration: 2500
      })
    }),
      (error: Error) => {
        console.log(error.name + ' ' + error.message)
        this.snackBar.open('Doslo je do greske prilikom izmene podataka o destinaciji. ', 'Zatvori', {
          duration: 2500
        })
      };

  }

 
  public delete(): void {
    this.destinacijaService.deleteDestinacija(this.data.id).subscribe(
      () => {
        this.snackBar.open('Destinacijaje uspešno obrisana!' + this.data.mesto, 'Ok', {
          duration: 2500
        });
      },
      (error: Error) => {
        console.log(error.name + ' ' + error.message);
        this.snackBar.open('Obrisana. ', 'Ok', {
          duration: 2500
        });
      }
    );
  }
  

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open('Odustali ste od izmene. ', 'Zatvori', {
      duration: 1000
    })
  }
}

