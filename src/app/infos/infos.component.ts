import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Personne } from '../models/personne';
import { ListPersonsService } from '../services/list-persons.service';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css']
})
export class InfosComponent implements OnInit {
  pers ;
  constructor(private activatedRoute : ActivatedRoute,
    private router: Router,
    private persServ : ListPersonsService) { }

  ngOnInit(): void {
    // let i = this.activatedRoute.snapshot.params['id'];
    // this.pers = this.persServ.getPersonById(i);

    this.activatedRoute.paramMap.subscribe(
      (p : ParamMap) => {
        this.persServ.getPersonByIdAPI(p.get('id')).subscribe(
          (result) => {
            this.pers = result
          },
          (error) => {
            console.log("Problem with getPersonById");
            
          }
        )
      },
      (error) => {
        console.log("Problem with Route Params");
        
      }
    )
  }

  deletePerson() {
    if(confirm('Etes-vous sur de vouloir supprimer cette personne ? '))
      {
        //this.persServ.deletePerson(this.pers);
        this.persServ.deletePersonAPI(this.pers["_id"]).subscribe(
          (result) => {
            this.router.navigateByUrl('/cv');
          },
          (error) => {
            console.log("Problem with deletePerson");
            
          }
        )
        
      }


  }

  updateThisPerson() {
    this.router.navigate(['/cv', 'edit', this.pers._id])
  }

}
