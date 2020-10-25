import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/components/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showProfile:boolean=false;
  showLogin:boolean=true;
  showClose:boolean=false;

  constructor(
    public router: Router,
    public service_login: LoginService,
  ) { }

  ngOnInit(): void {
    this.getValueLocal()
  }

 

  getValueLocal(){
    let val = localStorage.getItem('isLogged')
    if(val=='true'){
      this.showProfile= true;
      this.showClose=true;
      this.showLogin=false;
    }else{
      this.showProfile= false;
      this.showLogin=true;
      this.showClose=false;
    }
  }
  logout(){
    this.service_login.logout();
    window.location.reload();
    console.log(this.service_login.authInstance.currentUser.get())
  }
 

}

