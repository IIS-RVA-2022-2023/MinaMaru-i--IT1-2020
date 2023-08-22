import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Turisticka_agencija } from 'src/app/models/turisticka-agencija';
import { Aranzman } from 'src/app/models/aranzman';
import { TuristickaAgencijaService } from 'src/app/services/turisticka-agencija.service';
import { AranzmanService } from 'src/app/services/aranzman.service';

@Component({
  selector: 'app-aranzman-dialog',
  templateUrl: './aranzman-dialog.component.html',
  styleUrls: ['./aranzman-dialog.component.css']
})

export class AranzmanDialogComponent {

  flag!:number;
  Turisticka_agencije!:Turisticka_agencija[];

  constructor(public snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<Aranzman>,
              @Inject(MAT_DIALOG_DATA) public data:Aranzman,  
              public aranzmanService:AranzmanService,
              public turistickaAgencijeService:TuristickaAgencijaService){  
}

ngOnInit(): void {
  this.turistickaAgencijeService.getAllTurAgencije().subscribe(
    data => {
      this.Turisticka_agencije = data;
    }
  )
}

public add():void{
  this.aranzmanService.addAranzman(this.data).subscribe(
    () => {
      this.snackBar.open('Aranzman je uspesno dodat', 'Ok', {duration:4500});
    }
  ),
  (error:Error) => {
    console.log(error.name + ' ' + error.message);
    this.snackBar.open('Dogodila se greska prilikom dodavanja aranzmana', 'Zatvori', {duration:2500});
  }
}

public update():void{
  this.aranzmanService.updateOne(this.data).subscribe(
    () => {
      this.snackBar.open('Aranzman sa ID: ' + this.data.id + ' je uspesno izmenjen!', 'Ok', {duration:4500});
    }
  ),
  (error:Error) => {
    console.log(error.name + ' ' + error.message);
    this.snackBar.open('Dogodila se greska prilikom izmene', 'Ok', {duration:2500});
  }
}

public delete(): void {
  this.aranzmanService.delete(this.data.id).subscribe(
    () => {
      this.snackBar.open('Aranzman je uspešno obrisan!' , 'Ok', {
        duration: 2500
      });
    },
    (error: Error) => {
      console.log(error.name + ' ' + error.message);
      this.snackBar.open('Doslo je do greske prilikom brisanja aranzmana. ', 'Ok', {
        duration: 2500
      });
    }
  );
}

public cancel():void{
  this.dialogRef.close();
  this.snackBar.open('Odustali ste od izmena', 'Ok', {duration:2500})
}

public compare(a:any, b:any){
  return a.id == b.id;
}

}
