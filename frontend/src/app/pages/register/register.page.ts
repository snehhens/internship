import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false,
})
export class RegisterPage {

  form = {
    email: '',
    role: ''
  };

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  register() {

    this.auth.register(this.form)
    .subscribe((res:any) => {

      console.log(res);

      localStorage.setItem("email", this.form.email);

      this.router.navigate(['/otp']);

    });

  }

}