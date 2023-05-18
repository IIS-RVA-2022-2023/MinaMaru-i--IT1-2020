import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { TURAGENCIJA_URL } from '../app.constants';
import {Turisticka_agencija} from '../models/turisticka-agencija'

@Injectable({
  providedIn: 'root'
})
export class TuristickaAgencijaService {

  constructor(private httpClient: HttpClient) { }

  public  getAllTurAgencije(): Observable<any>{
    return this.httpClient.get(TURAGENCIJA_URL);
}
  
  public addTuristickaAgnecija(turistickaAgencija: Turisticka_agencija): Observable<any>{
    return this.httpClient.post(TURAGENCIJA_URL, turistickaAgencija);
}

  public updateTuristickaAgencija(turistickaAgencija: Turisticka_agencija): Observable<any>{
    return this.httpClient.put(TURAGENCIJA_URL+"/"+turistickaAgencija.id, turistickaAgencija);
}

  public deleteTuristickaAgencija(turistickaAgencijaId: number): Observable<any>{
    return this.httpClient.delete(TURAGENCIJA_URL+"/"+turistickaAgencijaId);
}
}
