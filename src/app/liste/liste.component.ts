import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Personne } from '../models/personne';
import { ListPersonsService } from '../services/list-persons.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  @Input() lstPersonne : Personne[] = [];
  @Output() persToCV = new EventEmitter<Personne>();

  constructor(private persService : ListPersonsService) { }

  ngOnInit(): void {
   
  }

  traitementList(p) {
    this.persToCV.emit(p)
  }

  showList() {
    console.log(this.persService.getListPersonnes());
    
  }

}
