import {Component, OnInit} from '@angular/core';
import {LocaleService} from "./services/locale.service";
import {AuthenticationService} from "./services/authentication.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  constructor(
    public localeService: LocaleService,
    public authenticationService: AuthenticationService,
  ) {
  }

  ngOnInit(): void {
    this.localeService.loadLocale()
      .subscribe();
  }

  get isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }
}
