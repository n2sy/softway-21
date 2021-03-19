import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListRecruesService } from '../list-recrues.service';
import { Personne } from '../models/personne';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() pers ;
  constructor(private recServ : ListRecruesService,
    private router : Router) { }

  ngOnInit(): void {
    
  }

  addNewRecrue() {
    this.recServ.addRecrue(this.pers)
  }

  goToDetails() {
    //console.log(this.pers);

    this.router.navigate(['/cv', this.pers._id ])
  }

}
