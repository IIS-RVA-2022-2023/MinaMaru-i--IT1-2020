import { Aranzman } from './../models/aranzman';
import { ARANZMAN_URL, ARANZMAN_HOTEL_URL } from './../app.constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AranzmanService {

  constructor(private httpClient: HttpClient) { }

  public getAranzmanByHotel(porId: number): Observable<any> {
    return this.httpClient.get(ARANZMAN_HOTEL_URL+'/'+porId);
  }

  public addAranzman(aranzman: Aranzman): Observable<any> {
    return this.httpClient.post(ARANZMAN_URL, aranzman);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete(ARANZMAN_URL  + "/" + id);
  }

  public updateOne(aranzman: Aranzman) : Observable<any>{
    return this.httpClient.put(ARANZMAN_URL + "/" + aranzman.id, aranzman);  }

}