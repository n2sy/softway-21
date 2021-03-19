import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  defaultSection = 'dmwm';

  defautlComment = "Rien à signaler...";

  valid : boolean = false;
  constructor(private authService : AuthService,
    private router : Router) { }

  ngOnInit(): void {
  }

  showForm(f) {
    console.log(f.value);
    
  }

  seConnecter(credentials) {

    this.authService.loginAPI(credentials).subscribe(
      (result) => {
        console.log(result);
        localStorage.setItem('mytoken', result['token']);
        
        this.valid = false;
        this.router.navigateByUrl("/cv");

      },
      (error) => {
        this.valid = true;

      }
    )

  }

  resetForm(f) {
    f.reset();
  }

}
