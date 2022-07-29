import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LocaleService} from "../../services/locale.service";
import {AuthenticationService} from "../../services/authentication.service";
import {LocaleProp} from "../../models/locale-prop";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  authForm?: FormGroup;
  public props!: LocaleProp;

  get formControls() {
    return this.authForm!.controls;
  }

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              public localeService: LocaleService,
              public authService: AuthenticationService) {
  }

  ngOnInit() {
    this.props = this.localeService.props;
    this.authForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  signIn() {
    if (this.authForm!.invalid) {
      return;
    } else {
      const {username, password} = this.formControls
      this.authService.login(username.value, password.value)
        .subscribe(res => {
          if (res) {
            this.router.navigate(['/home']).then();
          }
        });
    }
  }
}
