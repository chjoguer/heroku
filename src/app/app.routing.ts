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
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './components/authguard/auth.guard';
import {LoginGuard} from './components/loginguard/login.guard'
import { TipsRecomendationsComponent } from './components/tips-recomendations/tips-recomendations.component';
import { DonacionComponent } from './components/donacion/donacion.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PoliticasComponent } from './components/politicas/politicas.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';

const routes: Routes = [
    { path: '', component: IndexComponent },
    { path: 'index', component: IndexComponent },
    { path: 'galeria', component: GalleryComponent },
    { path: 'login', component: LoginComponent,canActivate:[LoginGuard]},
    { path: 'contact', component: ContactanosComponent},
    { path: 'calendar', component: CalendarComponent,canActivate:[AuthGuard]},
    { path: 'testimonios', component: TestimoniosComponent},
    { path: 'temas/:id_categoria', component: TemasComponent},
    { path: 'recuperar-contrasenia', component:ResetPasswordComponent },
    { path: 'tema-details/:id/:id_categoria', component:TemasDetailsComponent},
    { path: 'registrarse', component: RegisterComponent},
    { path: 'recomendacion', component: TipsRecomendationsComponent},
    { path: 'donacion', component: DonacionComponent},
    { path: 'profile', component: ProfileComponent,canActivate:[AuthGuard]},
    { path: 'politicas', component: PoliticasComponent},
    { path: 'nosotros', component: NosotrosComponent},

    // otherwise redirect to home
];
NgModule({
    imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
    exports: [RouterModule]
 })

 export const appRoutingModule = RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'});