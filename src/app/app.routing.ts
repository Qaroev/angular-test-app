import {Routes, RouterModule} from '@angular/router';
import {LoginPageComponent} from "./components/login-page/login-page.component";
import {HomePageComponent} from "./components/home-page/home-page.component";
import {SettingsPageComponent} from "./components/settings-page/settings-page.component";
import {NotfoundPageComponent} from "./components/notfound-page/notfound-page.component";
import {ProfilePageComponent} from "./components/profile-page/profile-page.component";
import {AuthGuard} from "./guards/auth.guard";
import {PermissionGuard} from "./guards/permission.guard";
import {UserPermissions} from "./models/user-permission";

const appRoutes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {
    path: 'home',
    component: HomePageComponent,
    data: {
      permission: UserPermissions.VIEW_HOME
    },
    canActivate: [AuthGuard, PermissionGuard],
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'profile',
    component: ProfilePageComponent,
    data: {
      permission: UserPermissions.VIEW_PROFILE
    },
    canActivate: [AuthGuard, PermissionGuard],
  },
  {
    path: 'settings',
    component: SettingsPageComponent,
    data: {
      permission: UserPermissions.VIEW_SETTINGS
    },
    canActivate: [AuthGuard, PermissionGuard],
  },
  {
    path: '**',
    component: NotfoundPageComponent,
  }
];
export const appRoutingModule = RouterModule.forRoot(appRoutes);
