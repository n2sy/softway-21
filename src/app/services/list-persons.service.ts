import { Injectable } from '@angular/core';
import { Personne } from '../models/personne';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListPersonsService {
  link = "http://localhost:3000/cv/persons"

  private listePersonne : Personne[] = [
  // new Personne(1, "nidhal", "jelassi", 38, "enseignant", "nidhal.jpg"),
  // new Personne(2, "bart", "simpson", 12, "ingénieur", "bart.jpg"),
  // new Personne(3, "homer", "simpson", 55, "tehcnicien", "homer.jpg"),
  // new Personne(4, "marge", "simpson", 77, "tehcnicien")
];
  constructor(private http : HttpClient) { }

  getListPersonnes() {
    return this.listePersonne;
  }

  getListPersonnesAPI() : Observable<Personne[]> {
    return this.http.get<Personne[]>(this.link);
  }

  addPerson(newP) {
    newP.id = this.listePersonne.length + 2;
    this.listePersonne.push(newP);
  }

  addPersonAPI(newP) {
    return this.http.post(this.link, newP);
  }

  getPersonById(id) {
    return this.listePersonne.find(p => p.id == id)
  }

  getPersonByIdAPI(id) {
    return this.http.get(`${this.link}/${id}`);
    //this.http.get(this.link + "/" + id);
  }

  deletePerson(p) {
    let i = this.listePersonne.indexOf(p)
    this.listePersonne.splice(i, 1);
  }

  deletePersonAPI(id) {
    return this.http.delete(`${this.link}/${id}`);
  }

  updatePerson(p) {
    let i = this.listePersonne.indexOf(p);
    this.listePersonne[i] = p;
  }

  updatePersonAPI(p) {
    return this.http.put(`${this.link}/${p._id}`, p);
  }
}
