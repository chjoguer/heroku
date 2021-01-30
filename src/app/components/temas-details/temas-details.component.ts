import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router, RouterEvent } from '@angular/router';
import { tr } from 'date-fns/locale';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { CategoiraTemaService} from '../../components/temas-details/services/categoira-tema.service';
import { TemaService } from '../../components/temas-details/services/tema.service';

@Component({
  selector: 'app-temas-details',
  templateUrl: './temas-details.component.html',
  styleUrls: ['./temas-details.component.css']
})
export class TemasDetailsComponent implements OnInit {
  public destroyed = new Subject<any>();
  navigationSubscription;

  categorias:any=[];
  tema_current:any=[];
  tema_by_categorys:any=[];
  images_temas:any=[];
  videos_temas:any=[];

  message:boolean=false;
  constructor(
    private service_categorias: CategoiraTemaService,
    private service_tema:TemaService,
    private activatedRoute: ActivatedRoute, 
    private sanitizer: DomSanitizer,
    private route:Router,
  ) { 
   


  }
  private url  = environment.apiUrl;

  id_tema:string;
  id_category:string;
  video:any;
  nombre_categoria:string;
  ngOnInit(): void {
    window.scrollTo(0, 0);
    /*Refresh the current page if the params url change*/
    this.activatedRoute.paramMap.subscribe(params => {
      this.id_tema=this.activatedRoute.snapshot.params.id;

      this.service_tema.get_tema(this.id_tema).subscribe(data=>{
        console.log(data);
        this.tema_current=data;
      });
      this.service_tema.get_imageByTema(this.id_tema).subscribe(data=>{
        this.images_temas=data;
        console.log(data);
      });
      this.service_tema.get_videoByTema(this.id_tema).subscribe(data=>{
        this.videos_temas=data;
        this.video = this.transform('https://www.youtube.com/embed/'+this.videos_temas[0].url)
        console.log(this.video);
      });

   })
    
    this.id_tema=this.activatedRoute.snapshot.params.id;
    this.id_category=this.activatedRoute.snapshot.params.id_categoria;

    this.service_categorias.fetch_categorias().subscribe(data=>{
      this.categorias=data;
    })

    this.service_tema.get_tema(this.id_tema).subscribe(data=>{
      this.tema_current=data;
      console.log(data);
    })

    this.service_tema.get_imageByTema(this.id_tema).subscribe(data=>{
      this.images_temas=data;
      console.log(data);
    })

    this.service_tema.get_temasAll(this.id_category).subscribe(data=>{
      this.tema_by_categorys=data;
      console.log(this.tema_by_categorys);
    });

    this.service_tema.get_videoByTema(this.id_tema).subscribe(data=>{
      this.videos_temas=data;
      this.video = this.transform('https://www.youtube.com/embed/'+this.videos_temas[0].url)
      //this.video = 'https://www.youtube.com/embed/'+this.videos_temas[0].url
      console.log(this.video);
    });
  }

  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }

  log_ :string;
  goToConsejerias(){
    this.log_ = localStorage.getItem('isLogged');
    if(this.log_=="true"){
      this.route.navigate(['/calendar']); // navigate to other page
    }else{
      console.log("No ha iniciado sesion");
      this.message=true;
    }
  }


}
