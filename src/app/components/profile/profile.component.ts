import { formatDate } from '@angular/common';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { ProfileService } from '../profile/service/profile.service'
declare var $:any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})


export class ProfileComponent implements OnInit {
 public passwordForm: FormGroup;
 public data_profile:any;
 public hide: boolean = true;

 public registerForm: FormGroup;
 public showMessage:boolean=false;
 public showMessagePassword:boolean=false;
 public url  = environment.apiUrl;

 /*Profile*/
 public nombre:any;
 public apellido:any;
 public email:string;
 public edad:number;
 public sexo:string;

 /*Date*/
 inicio_d:any
 termina_d:any

//  public nombre:string;

  error_messages = {
    'password': [
      { type: 'required', message: 'password es requerido.' },
      { type: 'minlength', message: 'tamaño del password.' },
      { type: 'maxlength', message: 'tamaño del password.' }
    ],
    'confirmpassword': [
      { type: 'required', message: 'password es requerido.' },
      { type: 'minlength', message: 'tamaño del password.' },
      { type: 'maxlength', message: 'tamaño del password.' }
    ],
  }
  constructor(private serviceProfile: ProfileService ,private formBuilder: FormBuilder,private passwordBuilder: FormBuilder ) {
  //   this.registerForm = this.formBuilder.group({
  //     user: localStorage.getItem('user'),
  //     nombre: ['', Validators.required],
  //     apellido: ['', Validators.required],
  //     email: ['', [Validators.required, Validators.email]],
  //     edad: ['', Validators.required],
  //     sexo: ['', Validators.required],
  //     profile:['']
  //  })
    this.passwordForm = this.passwordBuilder.group({
      user: localStorage.getItem('user'),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30)
      ])),
      confirmpassword: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30)
      ])),
    }, { 
      validators: this.password.bind(this)
    });
   }



  ngOnInit(): void {
    
    this.getProfileData()
  }


  myFunction() {
    this.hide = !this.hide;
  }

  onEdadChange(edad: number){
    console.log(edad);
  }
  onEmailChange(email:any){
    console.log(email);
  }
  onSexoChange(sexo:any){
    console.log(sexo);
  }
  onNombreChange(nombre:any){
    console.log(nombre);
    this.nombre=nombre;
  }

  onApellidoChange(apellido:any){
    console.log(apellido);
  }
 


 
  password(formGroup: FormGroup) {
    const { value: password } = formGroup.get('password');
    const { value: confirmPassword } = formGroup.get('confirmpassword');
    return password === confirmPassword ? null : { passwordNotMatch: true };
  }
  public file:any;
  onChange(event) {
    // var reader = new FileReader();
    // if(event.target.files && event.target.files.length > 0) {
    //   let file = event.target.files[0];
    //   reader.readAsDataURL(file);
    //   reader.onload = () => {
    //     this.url = reader.result; 
    //   };
    // }
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
      this.registerForm.get('profile').setValue(this.file);
    }
  }

  getProfileData(){
      this.serviceProfile.get_profile_data().subscribe((data)=>{
        console.log(data)
        this.data_profile=data;
        this.nombre=data['Nombre']
        this.apellido=data['Apellido']
        this.email=data['Email']
        this.edad=data['Edad']
        this.sexo=data['Sexo']
        if(data['estado']!=0){
          this.inicio_d=new Date(data['inicio'])
          this.termina_d=new Date(data['termina'])
          const locale = 'es-EC';
          var timeOffsetInMS:number = this.inicio_d.getTimezoneOffset() * 60000;
          this.inicio_d.setTime(this.inicio_d.getTime() + timeOffsetInMS);
          const formattedDate = formatDate(this.inicio_d, "yyyy-m-d h:m", locale);
          this.inicio_d=formattedDate;
          var timeOffsetInMS:number = this.termina_d.getTimezoneOffset() * 60000;
          this.termina_d.setTime(this.termina_d.getTime() + timeOffsetInMS);
          const formattedDate2 = formatDate(this.termina_d, "yyyy-m-d h:m", locale);
          this.termina_d=formattedDate2;
  
          console.log(this.inicio_d)
        }
     
      },
      (error)=>{
        console.log(error)
      }
    )
  }


  comparePassword(){
    const json = this.passwordForm.value
    console.log(json['password'])
    console.log(json)
    if(json['password']==json['confirmpassword']){
      return true;
    }
    else{
      return false;
    }

  }
  showMessagePasswordWr:boolean=false;
  postUpdatePassword(){
    const bool= this.comparePassword()
    if(bool){
      this.serviceProfile.update_password(this.passwordForm.value).subscribe(
        (data)=>{
          console.log("OK");
          this.showMessagePassword=true;
          // this.onReset();
        },
        (error)=>{
          console.log(error);
          // this.showError=true;
        }
  
      )
    }else{
      this.showMessagePasswordWr=true;
    }
    

  }
  postProfileData(){
    // const formData = new FormData();
    // formData.append('user', localStorage.getItem('user'));
    // formData.append('nombre', this.nombre);
    // formData.append('apellido', this.apellido);
    // formData.append('email', this.email);
    // formData.append('edad', '22');
    const form={
      'user':localStorage.getItem('user'),
      'nombre':this.nombre,
      'apellido':this.apellido,
      'email':this.email,
      'edad':this.edad,
    }
    console.log(form)

    // formData.append('file', this.registerForm.get('profile').value);
    // console.log(this.registerForm)
    this.serviceProfile.update_data(form).subscribe(
      (data)=>{
        console.log("OK");
        this.showMessage=true;
        this.getProfileData()
        // this.onReset();
      },
      (error)=>{
        console.log(error);
        // this.showError=true;
      }
  )
}


    selectedFiles: FileList;
    currentFile: File;
    progress = 0;
    message = '';

    fileInfos: Observable<any>;


    selectFile(event): void {
      this.selectedFiles = event.target.files;
    }

    upload(): void {
      this.progress = 0;
    
      this.currentFile = this.selectedFiles.item(0);
      this.serviceProfile.upload(this.currentFile).subscribe(
        event => {
          if (event.type === HttpEventType.UploadProgress) {
            this.progress = Math.round(100 * event.loaded / event.total);

          } else if (event instanceof HttpResponse) {
            location.reload();

            // this.message = event.body.message;
            // this.fileInfos = this.serviceProfile.getFiles();
          }
        },
        err => {
          this.progress = 0;
          this.message = 'Could not upload the file!';
          this.currentFile = undefined;
        });
      this.selectedFiles = undefined;


    }

  // $(".toggle-password").click(function() {

  //   $(this).toggleClass("fa-eye fa-eye-slash");
  //   var input = $($(this).attr("toggle"));
  //   if (input.attr("type") == "password") {
  //     input.attr("type", "text");
  //   } else {
  //     input.attr("type", "password");
  //   }
  // });

}
