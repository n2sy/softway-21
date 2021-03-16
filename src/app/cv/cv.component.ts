import { Component, OnInit } from '@angular/core';
import { Personne } from '../models/personne';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  persSelected : Personne;
  listePersonne : Personne[] = [
    new Personne(1, "nidhal", "jelassi", 38, "enseignant", "nidhal.jpg"),
    new Personne(2, "bart", "simpson", 12, "ingénieur", "bart.jpg"),
    new Personne(3, "homer", "simpson", 55, "tehcnicien", "homer.jpg"),
    new Personne(4, "marge", "simpson", 77, "tehcnicien")
  ]
  constructor() { }

  ngOnInit(): void {
  }

  traitementCV(p) {
    this.persSelected = p;
  }

}
