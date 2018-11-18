import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'btf-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loading = false;
  constructor(
    private auth: AuthService
  ) { }

  onLoginButtonClick() {
    this.auth.authorize();
    this.loading = true;
  }
}
