import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { TURAGENCIJA_URL } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class TuristickaAgencijaService {

  constructor(private httpClient: HttpClient) { }

  public  getAllTurAgencije(): Observable<any>{
    return this.httpClient.get(TURAGENCIJA_URL);
  
}

}
