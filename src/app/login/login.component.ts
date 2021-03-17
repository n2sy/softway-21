import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  defaultSection = 'dmwm';

  defautlComment = "Rien à signaler..."
  constructor() { }

  ngOnInit(): void {
  }

  showForm(f) {
    console.log(f.value);
    
  }

  resetForm(f) {
    f.reset();
  }

}
