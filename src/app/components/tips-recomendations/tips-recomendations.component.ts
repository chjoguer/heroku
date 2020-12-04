import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tips-recomendations',
  templateUrl: './tips-recomendations.component.html',
  styleUrls: ['./tips-recomendations.component.css']
})
export class TipsRecomendationsComponent implements OnInit {

  constructor() { }
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  ngOnInit(): void {
  }

}
