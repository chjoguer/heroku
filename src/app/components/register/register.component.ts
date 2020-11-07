import { Component, OnInit } from '@angular/core';
import { RegisterService } from './register.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  showMessage=false;


  constructor(private registerService: RegisterService, private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      nombre: ['', Validators.required],
      apellido: ['', [Validators.required]],
   })
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  register(){
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    this.showMessage=true;
    this.registerService.registrar(this.registerForm.value).subscribe(
      (data)=>{
        console.log("OK");
        this.onReset();
      },
      (error)=>{
        console.log(error);
      }


    );
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
}
}
