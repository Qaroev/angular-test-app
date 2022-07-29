import { Component, OnInit } from '@angular/core';
import {clearStorage} from "../../helpers/locale-storage-util";
import {UserPermissions} from "../../models/user-permission";
import {LocaleProp} from "../../models/locale-prop";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";
import {LocaleService} from "../../services/locale.service";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public navBarItems?: any[];
  public navItems: any[] = [
    {
      link: '/home',
      show: false,
      propName: 'home',
      permission: UserPermissions.VIEW_HOME
    },
    {
      link: '/profile',
      show: false,
      propName: 'profile',
      permission: UserPermissions.VIEW_PROFILE
    },
    {
      link: '/settings',
      show: false,
      propName: 'settings',
      permission: UserPermissions.VIEW_SETTINGS
    }
  ];
  public props?: LocaleProp;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    public localeService: LocaleService,
    public userService: UserService,
  ) {
  }

  ngOnInit(): void {
    this.props = this.localeService.props;
    if(this.userService.currentUser!=null){
      this.navBarItems = this.createNavBar(this.userService.currentUser.access?.permissions!);
    }
  }


  logout() {
    this.router.navigate(['/login']).then(() => clearStorage());
  }

  createNavBar(permissions: string[]) {
    this.navItems!.forEach(item => item.show = permissions.includes(item.permission));
    return this.navItems!
  }
}
