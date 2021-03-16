import { Component, OnInit } from '@angular/core';
import { Serveur } from '../models/serveur';

@Component({
  selector: 'app-manage-servers',
  templateUrl: './manage-servers.component.html',
  styleUrls: ['./manage-servers.component.css']
})
export class ManageServersComponent implements OnInit {
  selectedStatus : string ="";
  ListServeurs : Serveur[] = [
    new Serveur("production Server", "small", "stable", new Date(2021, 2, 12)),
    new Serveur("testing Production Server", "large", "offline", new Date(2020, 12, 2)),
    new Serveur("development Server", "medium", "critical", new Date(2010, 4, 2)),
    new Serveur("nidhal Server", "small", "offline", new Date(2020, 7, 23))
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

  addNewServer() {
    this.ListServeurs.push(
      new Serveur("New Server", "small", "stable", new Date(2020, 7, 23))

    )
  }

}
