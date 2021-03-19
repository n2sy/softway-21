import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  link = "http://localhost:3000/auth/login"

  constructor(private http: HttpClient, private router : Router) { }

  loginAPI(credentials) {
    return this.http.post(this.link, credentials)

  }

  logoutAPI() {
    let token = localStorage.getItem('mytoken');
    if(token) {
      localStorage.removeItem('mytoken');
      this.router.navigateByUrl('/login');

    }
  }

  isLogged() {
    let token = localStorage.getItem('mytoken');
    if(token) {
      return true
    }
    return false;
}
}
