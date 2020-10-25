import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { IndexComponent } from './components/index/index.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';


import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { CarouselComponent } from './components/carousel/carousel.component';
import { TemasDetailsComponent } from './components/temas-details/temas-details.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ContactanosComponent } from './components/contactanos/contactanos.component';
import { TestimoniosComponent } from './components/testimonios/testimonios.component';
import { TipsRecomendationsComponent } from './components/tips-recomendations/tips-recomendations.component';
import { TemasComponent } from './components/temas/temas.component';
import {NgxPaginationModule} from 'ngx-pagination'; 
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarComponent } from './components/calendar/calendar.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { PoliticasComponent } from './components/politicas/politicas.component';


import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    GalleryComponent,
    LoginComponent,
    CarouselComponent,
    ResetPasswordComponent,
    TemasDetailsComponent,
    ContactanosComponent,
    TestimoniosComponent,
    TipsRecomendationsComponent,
    TemasComponent,
    CalendarComponent,
    PoliticasComponent,

  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    IvyCarouselModule,
    NgbModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
   
  ],

  providers: [{provide : LocationStrategy , useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }