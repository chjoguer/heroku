import { Component, OnInit } from '@angular/core';
import {GaleriaService} from '../gallery/service/galeria.service'
import { Injectable } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers

})
export class GalleryComponent implements OnInit {

  images:any=[];
  p:number =1;
  images3 = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  images2 = [700, 800, 807].map((n) => `https://picsum.photos/id/${n}/900/500`);
  constructor(
    private service_galeria: GaleriaService,
    config: NgbCarouselConfig
  ) { 
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;


  }

  ngOnInit(): void {

    this.service_galeria.get_galeriaImages().subscribe(data=>{
      console.log(data);
      this.images=data;
    })
  }

  separateImage(){
    console.log(this.images.length)
    for (let index = 0; index < this.images.length; index++) {
      const element = [index];
      
    }
  }

}
