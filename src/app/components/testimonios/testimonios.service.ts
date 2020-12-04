import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestimoniosService {

  private url  = environment.apiUrl;

  constructor(private http: HttpClient,) { }

  postTestimonios(form: any): Observable<any>{
    return this.http.post(this.url+"/api/send_testimonios/", form);
  }

  get_testimonios(): Observable<any> {
    return this.http.get(this.url+"/api/get_testimonios/");
  }
 
}
