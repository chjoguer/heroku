import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable} from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class TemaService {
  private url: string = environment.apiUrl;

  constructor(private _http: HttpClient) { }

  get_tema(id_tema:any): Observable<any> {
    console.log(id_tema);
    return this._http.get(this.url+"/api/tema_by_id/?id="+id_tema);
  }

  get_temasAll(id_category:any): Observable<any> {
    return this._http.get(this.url+"/api/tema_by_category/?id="+id_category);
  }
  get_temas_category(id_category:any): Observable<any> {
    return this._http.get(this.url+"/api/temas_images_categoy/?id="+id_category);
  }

   get_imageByTema(id_tema:any): Observable<any> {
    return this._http.get(this.url+"/api/image_by_tema/?id="+id_tema);
  }

  get_videoByTema(id_tema:any): Observable<any> {
    return this._http.get(this.url+"/api/videos_by_tema/?id="+id_tema);
  }
}
