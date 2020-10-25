import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoiraTemaService } from '../temas-details/services/categoira-tema.service';
import { TemaService } from '../temas-details/services/tema.service';

@Component({
  selector: 'app-temas',
  templateUrl: './temas.component.html',
  styleUrls: ['./temas.component.css']
})
export class TemasComponent implements OnInit {
  temas_by_categorys:any=[];
  categorias:any=[];
  p:number =1;
  id_category:any;
  constructor(
    private service_tema:TemaService,
    private service_categorias: CategoiraTemaService,
    private activatedRoute: ActivatedRoute, 


  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id_category=this.activatedRoute.snapshot.params.id_categoria;
      this.service_tema.get_temas_category(this.id_category).subscribe(data=>{
        this.temas_by_categorys=data;
        console.log(this.temas_by_categorys);
      });
      this.p=1;

   })
    
    this.id_category=this.activatedRoute.snapshot.params.id_categoria;
    console.log(this.id_category);
    this.service_tema.get_temas_category(this.id_category).subscribe(data=>{
      this.temas_by_categorys=data;
      console.log(this.temas_by_categorys);
    });

    this.service_categorias.fetch_categorias().subscribe(data=>{
      this.categorias=data;
    })
  }

}
