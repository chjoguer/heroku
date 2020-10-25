import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ContactanosService {
  private url  = environment.apiUrl;

  constructor(private http: HttpClient) { }

  post_contactanos(form: any): Observable<any> {
    return this.http.post(this.url+"/api/contactanos/", form);
  }
}
