import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "./services/authentication.service";
import {LocaleService} from "./services/locale.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    public locale: LocaleService,
  ) {
    this.locale.loadLocale().subscribe();
  }
  ngOnInit(): void {
  }

  get isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') == 'true';
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }


}
