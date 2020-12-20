import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import{ActivatedRoute} from "@angular/router";
import { environment } from 'src/environments/environment.prod';

declare var jQuery: any;

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css',]
})
export class IndexComponent implements OnInit {

  constructor(public _http: HttpClient,private route: ActivatedRoute) { 

  }

  images3 = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  ngOnInit(): void {
    console.log("aquie");
    this.getTemasPrincipales(this._http);
    this.getTestimonio(this._http);
  }
  ngAfterViewInit(): void {
    (<any>window).twttr.widgets.load();
    (<any>window).widgets.createTimeline(
      {
        sourceType: "profile",
        screenName: "TwitterDev"
      },
      document.getElementById("container")
    );
  }
  
  private url  = environment.apiUrl;

  temas=[];
  // persons: { [id: string] :  } = {};
  _temas:any=[];
  getTemasPrincipales(_http:HttpClient){
    this._http.get(this.url+'/getPrincipalesTemas/')
    .subscribe(
      (data)=>{
        this._temas=data;
        console.log(data);
          for(let key in data){
            console.log(key);
            console.log(data[key]);
            this.temas.push(data[key]);
          }
      }
      ,(err: HttpErrorResponse)=>{console.log("Un error ha ocurrido")}
      ,()=>console.log("solicitud finalizada OK")
      )
  }
  _nosotros:any;
  getTestimonio(_http:HttpClient){
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
