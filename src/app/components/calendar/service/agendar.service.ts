import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AgendarService {
  private url  = environment.apiUrl;
  isAgendado:boolean=false;
  constructor(private http: HttpClient) { }

  setAgendado(angendado:boolean){
    this.isAgendado=angendado;
  }
  getIsAgendado(){
    return this.isAgendado;
  }

  post_agendar_consejerias(form: any): Observable<any> {
    return this.http.post(this.url+"/api/agendar_consejeria/", form);
  }

}
