import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TipsRecomendationsService {

  constructor(private http: HttpClient) { }


  private url  = environment.apiUrl;

  get_tips(): Observable<any> {
    return this.http.get(this.url+"/api/tips/");
  }
 
}
