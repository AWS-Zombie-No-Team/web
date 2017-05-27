import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { AuthService } from './service/auth.service';
import { UserService } from './service/user.service';
import { AuthGuard } from './service/auth.guard';
import { MapComponent } from './map/map.component';
import { ProfileComponent } from './profile/profile.component';

import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

const appRoutes: Routes = [
   { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
   { path: '', component: HomeComponent, canActivate: [AuthGuard] },
   { path: 'login', component: LoginComponent}


];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MapComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  schemas:   [CUSTOM_ELEMENTS_SCHEMA],
  providers: [AuthService, UserService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
