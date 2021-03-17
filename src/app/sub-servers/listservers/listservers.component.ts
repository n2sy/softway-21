import { Component, OnInit } from '@angular/core';
import { GererServerService } from '../gerer-server.service';

@Component({
  selector: 'app-listservers',
  templateUrl: './listservers.component.html',
  styleUrls: ['./listservers.component.css']
})
export class ListserversComponent implements OnInit {
  tabServers = [];
  constructor(private servService : GererServerService) { }

  ngOnInit(): void {
    this.tabServers = this.servService.tabServers;
  }

}
