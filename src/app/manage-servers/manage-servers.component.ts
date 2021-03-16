import { Component, OnInit } from '@angular/core';
import { Serveur } from '../models/serveur';

@Component({
  selector: 'app-manage-servers',
  templateUrl: './manage-servers.component.html',
  styleUrls: ['./manage-servers.component.css']
})
export class ManageServersComponent implements OnInit {
  ListServeurs : Serveur[] = [
    new Serveur("Production Server", "small", "stable", new Date(2021, 2, 12)),
    new Serveur("Testing Production Server", "large", "offline", new Date(2020, 12, 2)),
    new Serveur("Development Server", "medium", "critical", new Date(2010, 4, 2)),
    new Serveur("Nidhal Server", "small", "offline", new Date(2020, 7, 23))
  ]
  constructor() { }

  ngOnInit(): void {
  }

  setClass(status) {
    return {
      'list-group-item-success' : status == "stable",
      'list-group-item-danger' : status == "critical",
      'list-group-item-warning' : status == "offline" 
    }
  }

}
