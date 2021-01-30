import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {
  private url  = environment.apiUrl;
  constructor(public _http: HttpClient,private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getNosotros(this._http);
  }

  _nosotros:any;
  getNosotros(_http:HttpClient){
    this._http.get(this.url+'/api/getNosotros/')
    .subscribe(
      (data)=>{
        this._nosotros=data;
        console.log(data)
      }
      ,(err: HttpErrorResponse)=>{console.log("Un error ha ocurrido")}
      ,()=>console.log("solicitud finalizada OK")
      )
  }

}
