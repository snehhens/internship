import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
  standalone: false,
})
export class OtpPage {

  form = {
    email: '',
    otp: ''
  };

  constructor(
  private auth: AuthService,
  private router: Router
  ) {}

  ngOnInit() {

    const savedEmail = localStorage.getItem("email");

    if(savedEmail) {
      this.form.email = savedEmail;
    }

  }

  verifyOtp() {

    this.auth.verifyOtp(this.form)
    .subscribe((res:any) => {

      console.log(res);

      this.router.navigate(['/password']);

    });

  }

}