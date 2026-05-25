import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  api = 'http://localhost:5000/api/auth';

  constructor(private http: HttpClient) {}

  register(data:any) {
    return this.http.post(`${this.api}/register`, data);
  }

  verifyOtp(data:any) {
  return this.http.post(`${this.api}/verify-otp`, data);
  }

  createPassword(data:any) {
  return this.http.post(`${this.api}/create-password`, data);
  }

  login(data:any) {
  return this.http.post(`${this.api}/login`, data);
  }
}



