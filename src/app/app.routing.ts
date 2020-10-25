import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { IndexComponent } from './components/index/index.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import {LoginComponent } from './components/login/login.component';
import {ResetPasswordComponent } from './components/reset-password/reset-password.component';
import {TemasDetailsComponent } from './components/temas-details/temas-details.component';
import {ContactanosComponent } from './components/contactanos/contactanos.component';
import {TemasComponent } from './components/temas/temas.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { TestimoniosComponent } from './components/testimonios/testimonios.component';

const routes: Routes = [
    { path: '', component: IndexComponent },
    { path: 'index', component: IndexComponent },
    { path: 'galeria', component: GalleryComponent },
    { path: 'login', component: LoginComponent},
    { path: 'contact', component: ContactanosComponent},
    { path: 'calendar', component: CalendarComponent},
    { path: 'testimonios', component: TestimoniosComponent},

    { path: 'temas/:id_categoria', component: TemasComponent},
    { path: 'recuperar-contrasenia', component:ResetPasswordComponent },
    { path: 'tema-details/:id/:id_categoria', component:TemasDetailsComponent, runGuardsAndResolvers: 'always'},

    // otherwise redirect to home
];
NgModule({
    imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
    exports: [RouterModule]
 })

 export const appRoutingModule = RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'});