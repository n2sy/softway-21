import { Component, OnInit } from '@angular/core';
import { Personne } from '../models/personne';
import { FirstService } from '../services/first.service';
import { ListPersonsService } from '../services/list-persons.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  persSelected : Personne;
  listePersonne : Personne[] = [];
  
  constructor(private persService : ListPersonsService) { }

  ngOnInit(): void {
    this.listePersonne = this.persService.getListPersonnes();
  }

  traitementCV(p) {
    this.persSelected = p;
  }

  

  showList() {
    console.log(this.persService.getListPersonnes());
    
  }

}
