import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class GaleriaService {
  private url: string = environment.apiUrl;

  constructor(private _http: HttpClient) { }

  
  get_galeriaImages(): Observable<any> {
    return this._http.get(this.url+"/api/images_galeria/");
  }
}
