import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public gapiSetup: boolean = false; // marks if the gapi library has been loaded
  public authInstance: gapi.auth2.GoogleAuth;
  public error: string;
  public user: gapi.auth2.GoogleUser;

  username: string;
  password: string;
  message: string;
  showErrorMessage: boolean;
  isLogin:boolean=false;

  constructor(public service_login: LoginService, public router: Router) {}

  async initGoogleAuth(): Promise<void> {
    //  Create a new Promise where the resolve 
    // function is the callback passed to gapi.load
    const pload = new Promise((resolve) => {
      gapi.load('auth2', resolve);
    });
    // When the first promise resolves, it means we have gapi
    // loaded and that we can call gapi.init
    return pload.then(async () => {
      await gapi.auth2
        .init({ client_id: '790605058407-2o3vrdo19ldk3190f7csniun7cou8mig.apps.googleusercontent.com' })
        .then(auth => {
          this.gapiSetup = true;
          this.authInstance = auth;
          this.service_login.setAuthGoogle(auth);
        });
    });
  }

  async authenticate(): Promise<gapi.auth2.GoogleUser> {
    // Initialize gapi if not done yet
    if (!this.gapiSetup) {
      await this.initGoogleAuth();
    }
    // Resolve or reject signin Promise
    return new Promise(async () => {
      await this.authInstance.signIn().then(
        (user) =>{ this.user = user,
        console.log(this.user.getBasicProfile().getName())
        this.service_login.setIsLogin('true');
        this.isLogin=true;
        this.router.navigateByUrl('/');
      
      },
        (error) =>{ this.error = error
        
        })
    });
  }
 
  async checkIfUserAuthenticated(): Promise<boolean> {
    // Initialize gapi if not done yet
    if (!this.gapiSetup) {
      await this.initGoogleAuth();
    }
    return this.authInstance.isSignedIn.get();
  }

  async ngOnInit() {
    if (await this.checkIfUserAuthenticated()) {
      this.user = this.authInstance.currentUser.get();
      console.log(this.checkIfUserAuthenticated())
    }
  }

  login() {
    this.showErrorMessage = false;
    const user = {username: this.username, password: this.password};
    console.log(this.username);
    console.log(this.password);

    this.service_login.login(user).subscribe( data => {
      console.log(data);
      console.log(user.username);  
      this.service_login.setUser(user.username);  
      this.service_login.setToken(data.token);
      this.service_login.setLogin(true);
      this.service_login.getToken();
      this.service_login.setIsLogin('true')
      this.isLogin=true;
      this.router.navigateByUrl('/');
    },
    (error)=>{
      console.log(error);
      this.message="Usuario o contraseña incorrecta";
      console.log("error");
      this.showErrorMessage = true;
    }    
    );
  }

  register(){
    this.router.navigateByUrl('/registrarse');
  }

}
