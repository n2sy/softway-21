import { Component, OnInit } from '@angular/core';
import { ListRecruesService } from '../list-recrues.service';
import { Personne } from '../models/personne';

@Component({
  selector: 'app-recruter',
  templateUrl: './recruter.component.html',
  styleUrls: ['./recruter.component.css']
})
export class RecruterComponent implements OnInit {
  tabRecrue : Personne[] = [];

  constructor(private recServ : ListRecruesService) { }

  ngOnInit(): void {
    this.tabRecrue = this.recServ.getListRecrues();
  }

}
