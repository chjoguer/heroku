import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'family-proyect';

  showHead: boolean = false;
  showFooter: boolean = false;

  constructor(private router: Router) {
    // on route change to '/login', set the variable showHead to false
      router.events.forEach((event) => {
        if (event instanceof NavigationStart) {
          if (event['url'] == '/login' || event['url']=='/recuperar-contrasenia' || event['url']=='/registrarse') {
            this.showHead = false;
            this.showFooter = false;

          } else {
            this.showHead = true;
            this.showFooter = true;

          }
        }
      });
    }
}
