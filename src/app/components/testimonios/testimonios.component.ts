import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {TestimoniosService} from '../testimonios/testimonios.service';
import {NgxPaginationModule} from 'ngx-pagination';

@Component({
  selector: 'app-testimonios',
  templateUrl: './testimonios.component.html',
  styleUrls: ['./testimonios.component.css']
})
export class TestimoniosComponent implements OnInit {

  p:number =1;
  testimonios: any[];

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  registerForm: FormGroup;
  submitted = false;
  showMessage=false;
  showError=false;
  constructor(private serviceTestimonios: TestimoniosService, private formBuilder: FormBuilder,) { }


  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      title: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      description: ['', Validators.required],
   })
   this.getTestimonios();
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }
  val:any;
  set(){
    this.val="single-input-accent"
  }
  onSubmit(){
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    this.showMessage=true;
    this.serviceTestimonios.postTestimonios(this.registerForm.value).subscribe(
       (data)=>{
         console.log("OK");
         this.onReset();
       },
       (error)=>{
         console.log(error);
         this.showError=true;
       }
     );
  }
  log_ :string;

  sendTestimonios(){
    this.log_ = localStorage.getItem('isLogged');
    if(this.log_=="true"){
      this.onSubmit();
    }else{
      console.log("No ha iniciado sesion");
      this.showError=true;
    }
  }


  getTestimonios(){
    this.serviceTestimonios.get_testimonios().subscribe((data)=>{
      console.log("...sas...")
      console.log(data)
      let response = [];
      for (let i = 0; i < data.length; i++) {
        response[i] = data[data.length-1-i];
      }
      console.log(response);
      this.testimonios=response;
    },
    (error)=>{
      console.log(error)
    }
    )
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
}

}
