import {Hotel} from "./hotel"
import { Turisticka_agencija } from "./turisticka-agencija";

export class Aranzman {

    id!: number;
    ukupna_cena!: number;
    placeno!:boolean;
    datum_realizacije!: Date;
    hotel!:Hotel;
    turisticka_agencija!: Turisticka_agencija;
   
}
