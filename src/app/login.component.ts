import { Component } from '@angular/core';
import { LoginService } from './login.service';

import { DashboardComponent } from './dashboard.component';

@Component({
  selector: 'user-login',
  templateUrl: './login.component.html',
  providers: [LoginService]
})


export class LoginComponent {

  constructor(
    private loginService: LoginService) { }

  login(loginId: string, password: string): void {

    this.loginService.login(loginId, password);
  }

}