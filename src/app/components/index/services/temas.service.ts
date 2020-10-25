import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class TemasService {


  private url  = environment.apiUrl;
  constructor(private http:HttpClient) {
  
  }
  /*Obtengo los 4 Temas Principales*/
  getTemas(): Observable<any>{
      const url = this.url+'/api/product';
      return this.http.get(url);
  }



}
