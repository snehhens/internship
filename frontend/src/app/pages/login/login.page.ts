import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage {

  form = {
    email: '',
    password: ''
  };

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  login() {

    this.auth.login(this.form)
      .subscribe((res: any) => {

        console.log(res);

        localStorage.setItem("token", res.token);

        localStorage.setItem(
          "profileCompleted",
          res.profileCompleted
        );

        if (res.profileCompleted) {

          this.router.navigate(['/home']);

        } else {

          this.router.navigate(['/profile']);

        }

      });

  }

}