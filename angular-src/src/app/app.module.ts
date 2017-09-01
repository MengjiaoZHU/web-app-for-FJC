import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router'; 
import { Router } from '@angular/router';

import {ValidateService} from './services/validate.service';
import {AuthService} from './services/auth.service';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {AuthGuard} from './guards/auth.guard';

import { AppComponents, AppRoutes } from "./app.routing";
import { AppComponent } from './app.component';
import { TourComponent } from './components/tour/tour.component';
import { BronxPageComponent } from './components/bronx-page/bronx-page.component';
import { BrooklynPageComponent } from './components/brooklyn-page/brooklyn-page.component';
import { ManhattanPageComponent } from './components/manhattan-page/manhattan-page.component';
import { QueensPageComponent } from './components/queens-page/queens-page.component';
import { StatenPageComponent } from './components/staten-page/staten-page.component';




import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ServiceOfferedComponent } from './components/service-offered/service-offered.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { TipsComponent } from './components/tips/tips.component';
import { PrepareComponent } from './components/prepare/prepare.component';
import { FaqComponent } from './components/faq/faq.component';


export const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path:'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path:'service_offered', component: ServiceOfferedComponent},
  {path:'testimonial', component: TestimonialComponent},
  {path:'tips', component: TipsComponent},
  {path:'prepare', component: PrepareComponent},
  {path:'faq', component: FaqComponent},

  {path:'tour', component: TourComponent},
  {path:'bronx_page', component: BronxPageComponent},

  {path:'brooklyn_page', component: BrooklynPageComponent},
  {path:'manhattan_page', component: ManhattanPageComponent},
  {path:'queens_page', component: QueensPageComponent},
  {path: 'staten_page', component: StatenPageComponent},



]


 


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule,
  ],
  declarations: [
    AppComponent,
    AppComponents,

    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    DashboardComponent,
    ServiceOfferedComponent,
    TestimonialComponent,
    TipsComponent,
    PrepareComponent,
    FaqComponent,
    TourComponent,
    BronxPageComponent,
    BrooklynPageComponent,
    QueensPageComponent,
    ManhattanPageComponent,
    StatenPageComponent
    
  ],
 
  providers: [ValidateService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}