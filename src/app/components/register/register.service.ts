import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable} from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private url  = environment.apiUrl;

  constructor(private http: HttpClient,) { }

  registrar(form: any): Observable<any>{
    return this.http.post(this.url+"/api/register/", form);
  }

}
