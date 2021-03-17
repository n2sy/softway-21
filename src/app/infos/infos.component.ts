import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Personne } from '../models/personne';
import { ListPersonsService } from '../services/list-persons.service';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css']
})
export class InfosComponent implements OnInit {
  pers : Personne;
  constructor(private activatedRoute : ActivatedRoute,
    private persServ : ListPersonsService) { }

  ngOnInit(): void {
    // let i = this.activatedRoute.snapshot.params['id'];
    // this.pers = this.persServ.getPersonById(i);

    this.activatedRoute.paramMap.subscribe(
      (p : ParamMap) => {
        this.pers = this.persServ.getPersonById(p.get('id'))
      }
    )
  }

}
