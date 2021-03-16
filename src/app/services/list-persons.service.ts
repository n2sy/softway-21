import { Injectable } from '@angular/core';
import { Personne } from '../models/personne';

@Injectable({
  providedIn: 'root'
})
export class ListPersonsService {
  private listePersonne : Personne[] = [
  new Personne(1, "nidhal", "jelassi", 38, "enseignant", "nidhal.jpg"),
  new Personne(2, "bart", "simpson", 12, "ingénieur", "bart.jpg"),
  new Personne(3, "homer", "simpson", 55, "tehcnicien", "homer.jpg"),
  new Personne(4, "marge", "simpson", 77, "tehcnicien")
];
  constructor() { }

  getListPersonnes() {
    return this.listePersonne;
  }

  addPerson() {
    this.listePersonne.push(
      new Personne(3, "New", "Person", 55, "tehcnicien", "homer.jpg")
    )
  }
}
