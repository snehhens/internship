import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth';
import { Router } from '@angular/router';
import { PasswordData } from 'src/app/interfaces/auth.interface';

@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
  standalone: false,
})
export class PasswordPage implements OnInit {

  form: PasswordData = {
    email: '',
    password: ''
  };

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {

    const savedEmail = localStorage.getItem("email");

    if (savedEmail) {
      this.form.email = savedEmail;
    }

  }

  createPassword() {

    this.auth.createPassword(this.form)
      .subscribe((res: any) => {

        console.log(res);

        this.router.navigate(['/login']);

      });

  }

}