import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {LoginPageComponent} from './components/login-page/login-page.component';
import {ProfilePageComponent} from './components/profile-page/profile-page.component';
import {SettingsPageComponent} from './components/settings-page/settings-page.component';
import {HomePageComponent} from './components/home-page/home-page.component';
import {NotfoundPageComponent} from './components/notfound-page/notfound-page.component';
import {appRoutingModule} from "./app.routing";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {UserService} from "./services/user.service";
import {AuthenticationService} from "./services/authentication.service";
import {PermissionGuard} from "./guards/permission.guard";
import {AuthGuard} from "./guards/auth.guard";


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ProfilePageComponent,
    SettingsPageComponent,
    HomePageComponent,
    NotfoundPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    appRoutingModule
  ],
  providers: [
    AuthGuard,
    PermissionGuard,
    UserService,
    AuthenticationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
