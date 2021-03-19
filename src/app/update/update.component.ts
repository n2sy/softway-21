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
  pers;
  constructor(private activatedRoute : ActivatedRoute,
    private router: Router,
    private persServ : ListPersonsService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (p) => {
        this.persServ.getPersonByIdAPI(p.get('id')).subscribe(
          (result) => {
            this.pers = result
          },
          (error) => {
            console.log("Problem with getPerson");
            
          }
        )
      }
    )
  }

  updatePerson() {
    //this.persServ.updatePerson(this.pers);
    //this.router.navigate(['/cv']);
    this.persServ.updatePersonAPI(this.pers).subscribe(
      (result) => {
        this.router.navigate(['/cv']);
      },
      (error) => {
        console.log("Problem with updatePerson")
      }
    )
  }

}
