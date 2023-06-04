import {Destinacija} from "./destinacija"

export class Hotel {

    id!: number;
    naziv!:string;
    broj_zvezdica!: number;
    opis!:string;
    destinacija!:Destinacija;
}

