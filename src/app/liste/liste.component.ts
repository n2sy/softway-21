import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Personne } from '../models/personne';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  @Input() lstPersonne : Personne[] = [];
  @Output() persToCV = new EventEmitter<Personne>();
  constructor() { }

  ngOnInit(): void {
  }

  traitementList(p) {
    this.persToCV.emit(p)
  }

}
