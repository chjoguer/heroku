import { Component, OnInit } from '@angular/core';
import {TipsRecomendationsService} from '../tips-recomendations/tips-recomendations.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-tips-recomendations',
  templateUrl: './tips-recomendations.component.html',
  styleUrls: ['./tips-recomendations.component.css']
})
export class TipsRecomendationsComponent implements OnInit {
  
  constructor(private serviceTips: TipsRecomendationsService) { }
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  mediaUrl = environment.apiUrl+"/media/";
  p:number =1;
  tips: any[];  

  ngOnInit(): void {
    this.getTips();
  }

  getTips(){
    this.serviceTips.get_tips().subscribe((data)=>{
      console.log("...sas...");
      console.log(data);
      let response = [];
      for (let i = 0; i < data.length; i++) {
        response[i] = data[data.length-1-i];
      }
      console.log(response);
      this.tips=response;
    },
    (error)=>{
      console.log(error)
    }
    )
  }
}
