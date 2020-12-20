import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private url  = environment.apiUrl;

  constructor(private http: HttpClient,) { }

  postTestimonios(form: any): Observable<any>{
    return this.http.post(this.url+"/api/send_testimonios/", form);
  }
  form:any ={'user':localStorage.getItem('user')};
  get_profile_data(): Observable<any> {
    return this.http.get(this.url+"/api/get_profile/?id="+localStorage.getItem('user'));
  }
 
  update_data(form: any): Observable<any>{
   
    return this.http.post(this.url+"/api/update_profile/", form  );
  }

  update_password(form: any): Observable<any>{
    return this.http.post(this.url+"/api/update_password/", form);
  }

  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('user', localStorage.getItem('user'));

    formData.append('file', file);

    const req = new HttpRequest('POST', this.url+'/api/updateImage/', formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

}
