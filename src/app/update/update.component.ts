import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from '../models/personne';
import { ListPersonsService } from '../services/list-persons.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  pers: Personne;
  constructor(private activatedRoute : ActivatedRoute,
    private router: Router,
    private persServ : ListPersonsService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (p) => {
        this.pers = this.persServ.getPersonById(p.get('id'))
      }
    )
  }

  updatePerson() {
    this.persServ.updatePerson(this.pers);
    this.router.navigate(['/cv']);
  }

}
