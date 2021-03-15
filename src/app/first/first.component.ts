import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  name : string = "moez";
  prenom : string = "zannouni";
  color : string = "yellow";
  hd = false;

  nameParent = "Parent"
  constructor() { }

  ngOnInit(): void {
  }

  showAlert() {
    alert('Ceci est une alert');
  }

  TraitementDuParent(info) {
    alert(info);
  }

}
