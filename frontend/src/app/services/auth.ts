import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  RegisterData,
  VerifyOtpData,
  PasswordData,
  LoginData
} from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  api = 'http://localhost:5000/api/auth';

  constructor(private http: HttpClient) { }

  register(data: RegisterData) {
    return this.http.post(`${this.api}/register`, data);
  }

  verifyOtp(data: VerifyOtpData) {
    return this.http.post(`${this.api}/verify-otp`, data);
  }

  createPassword(data: PasswordData) {
    return this.http.post(`${this.api}/create-password`, data);
  }

  login(data: LoginData) {
    return this.http.post(`${this.api}/login`, data);
  }
}



