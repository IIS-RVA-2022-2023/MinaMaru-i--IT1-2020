import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
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
  public Turisticka_agencije!: Turisticka_agencija[];
  public flag!: number;
    turistickaAgencijaSubscription!: Subscription;
   

  constructor(public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<AranzmanDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Aranzman,
    public aranzmanService: AranzmanService,
    public turistickaAgencijaService: TuristickaAgencijaService) { }

  ngOnDestroy(): void {
    this.turistickaAgencijaSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.turistickaAgencijaSubscription = this.turistickaAgencijaService.getAllTurAgencije()
      .subscribe(data => {
        this.Turisticka_agencije = data;
      }),
      (error: Error) => {
        console.log(error.name + ' ' + error.message);
      }
  }

  compareTo(a: any, b: any) {
    return a.id === b.id;
  }
  
  public add(): void {
    this.aranzmanService.addAranzman(this.data)
      .subscribe(
        (response) => {
          console.log(response);
          this.snackBar.open('Uspešno dodat aranzman!', 'U redu', {
            duration: 2500
          });
        },
        (error: any) => {
          console.log(error);
          this.snackBar.open('Dogodila se greška!', 'Zatvori', {
            duration: 1500
          });
        }
      );
  }
  

  public update(): void {
    this.aranzmanService.updateOne(this.data)
      .subscribe(() => {
        this.snackBar.open('Uspešno modifikovan aranzman!', 'U redu', {
          duration: 2500
        })
      },
      (error: Error) => {
        console.log(error.name + ' ' + error.message);
        this.snackBar.open('Dogodila se greška!', 'Zatvori', {
          duration: 1500
        })
      });
  }

  public delete(): void {
    this.aranzmanService.delete(this.data.id)
      .subscribe(() => {
        this.snackBar.open('Uspešno obrisan aranzman!', 'U redu', {
          duration: 2500
        })
      },
      (error: Error) => {
        console.log(error.name + ' ' + error.message);
        this.snackBar.open('Dogodila se greška!', 'Zatvori', {
          duration: 1500
        })
      });
  }

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open('Odustali ste!', 'Zatvori', {
      duration: 1500
    })
  }
}