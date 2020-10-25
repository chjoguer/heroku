import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable} from 'rxjs';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class CategoiraTemaService {

  private url: string = environment.apiUrl;
  constructor(private _http: HttpClient) { }
  fetch_categorias(): Observable<any> {
    return this._http.get(this.url+"/api/categorias_temas/");
  }

}
