import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Turisticka_agencija } from 'src/app/models/turisticka-agencija';
import { TuristickaAgencijaService } from 'src/app/services/turisticka-agencija.service';


@Component({
  selector: 'app-turisticka-agencija-dialog',
  templateUrl: './turisticka-agencija-dialog.component.html',
  styleUrls: ['./turisticka-agencija-dialog.component.css']
})
export class TuristickaAgencijaDialogComponent {
  public flagArtDialog!: number;

  constructor(public snackBar: MatSnackBar,
    public turistickaAgencijaService: TuristickaAgencijaService,
    @Inject(MAT_DIALOG_DATA) public dataTuristickaAgencija: Turisticka_agencija,
    public dialogRef: MatDialogRef<Turisticka_agencija>) { }

  
    
  public add(): void {
    console.log("ID je " + this.dataTuristickaAgencija.id + this.dataTuristickaAgencija.naziv);
    this.turistickaAgencijaService.addTuristickaAgnecija(this.dataTuristickaAgencija).subscribe(() => {
      this.snackBar.open('Uspesno dodata agencija: ' + this.dataTuristickaAgencija.naziv, 'OK', {
        duration: 2500
      })
    }),
      (error: Error) => {
        console.log(error.name + ' ' + error.message)
        this.snackBar.open('Doslo je do greske prilikom dodavanja nove agencije. ', 'Zatvori', {
          duration: 2500
        })
      };
  }
public update(): void {   
    this.turistickaAgencijaService.updateTuristickaAgencija(this.dataTuristickaAgencija).subscribe(() => {
      this.snackBar.open('Uspesno izmenjena agencija: ' + this.dataTuristickaAgencija.naziv, 'OK', {
        duration: 2500
      })
    }),
      (error: Error) => {
        console.log(error.name + ' ' + error.message)
        this.snackBar.open('Doslo je do greske prilikom izmene agencije. ', 'Zatvori', {
          duration: 2500
        })
      };

  }

 
public delete(): void {
  this.turistickaAgencijaService.deleteTuristickaAgencija(this.dataTuristickaAgencija.id).subscribe(() => {
    
    console.error('Uspesno brisanja turisticke agencije:');
    this.snackBar.open('Uspesno obrisana turisticka agencija: ' + this.dataTuristickaAgencija.naziv, 'OK', {
      duration: 2500
    });
    
  },
    (error: Error) => {
     /* console.error('Greska prilikom brisanja turisticke agencije:', error);
      this.snackBar.open('Doslo je do greske prilikom brisanja destinacija. ', 'Zatvori', {
        duration: 2500
      });*/
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
