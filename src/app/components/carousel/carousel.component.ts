import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

// import { Injectable } from '@angular/core';
// import {LoginService} from '../login/login.service';
// import {CanActivate} from '@angular/router';
// import { Router, ActivatedRouteSnapshot } from '@angular/router';

// @Injectable({
//   providedIn: 'root'
// })
// export class GuardloginService implements CanActivate{

//     constructor(private router: Router, private service_login:LoginService ) { }

//     canActivate(): boolean {
//         if(this.service_login.getIsLogin()){
//             this.router.navigate(['/'])
//             return false;
//         }
//         return true;
//     }

// }

// import { Component } from '@angular/core';
// import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router, UrlTree } from '@angular/router';
// import { Injectable } from '@angular/core';


// @Injectable({
//     providedIn: 'root'
//   })
// @Component({
//   selector: 'app-authguard',
//   templateUrl: './authguard.component.html',
//   styleUrls: ['./authguard.component.css']
// })
// export class AuthguardComponent implements CanActivate {

//   constructor(private router: Router) { }

//   canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
//     if (localStorage.getItem("token")==null) {
//       this.router.navigateByUrl('login');
//       return false;
//     } else {
//       return true;
//     }
//   }

  


//   ngOnInit(): void {
//   }

// }