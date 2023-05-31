import {Hotel} from "./hotel"
import { Turisticka_agencija } from "./turisticka-agencija";

export class Aranzman {

    id!: number;
    ukupna_cena!: number;
    placeno!:boolean;
    Datum_realizacije!: Date;
    hotel!:Hotel;
    Turisticka_agencija!: Turisticka_agencija;
   
}
