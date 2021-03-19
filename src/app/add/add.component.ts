import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListPersonsService } from '../services/list-persons.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private persService : ListPersonsService,
    private router : Router) { }

  ngOnInit(): void {
  }

  addNewPerson(newPers) {
    //this.persService.addPerson(newPers);
    this.persService.addPersonAPI(newPers).subscribe(
      (result) => {
        console.log(result);
        this.router.navigateByUrl('/cv');
        
      },
      (error) => {
        console.log("Problem with AddPerson");
        
      }
    )
    


  }

}
