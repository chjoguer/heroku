import { ConstantPool } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactanosService } from '../contactanos/contactanos.service';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css']
})
export class ContactanosComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  showMessage=false;

  constructor(private formBuilder: FormBuilder,private contact_service: ContactanosService) { }  val:any;
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      title: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(10)]],
   })
  }
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  set(){
    this.val="single-input-accent"
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    this.showMessage=true;
    this.contact_service.post_contactanos(this.registerForm.value).subscribe(
      (data)=>{
        console.log("OK");
        this.onReset();
      },
      (error)=>{
        console.log(error);
      }


    );

    console.log(this.registerForm.value)
    
    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

  onReset() {
      this.submitted = false;
      this.registerForm.reset();
  }

}
