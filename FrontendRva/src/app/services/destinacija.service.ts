import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DESTINACIJA_URL } from '../app.constants';
import { Destinacija } from '../models/destinacija';

@Injectable({
  providedIn: 'root'
})
export class DestinacijaService {

  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<any> {
    return this.httpClient.get(`${DESTINACIJA_URL}`);
  }

  public addDestinacija(destinacija: Destinacija): Observable<any> {
    return this.httpClient.post(DESTINACIJA_URL, destinacija);
  }

  public deleteDestinacija(id: number): Observable<any> {
    return this.httpClient.delete(DESTINACIJA_URL  + "/" + id);
  }

  public updateDestinacija(destinacija: Destinacija) : Observable<any>{
    return this.httpClient.put(DESTINACIJA_URL + "/" + destinacija.id, destinacija);  }
}
