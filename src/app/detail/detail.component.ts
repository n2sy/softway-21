import { Component, Input, OnInit } from '@angular/core';
import { ListRecruesService } from '../list-recrues.service';
import { Personne } from '../models/personne';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() pers : Personne;
  constructor(private recServ : ListRecruesService) { }

  ngOnInit(): void {
  }

  addNewRecrue() {
    this.recServ.addRecrue(this.pers)
  }

}
