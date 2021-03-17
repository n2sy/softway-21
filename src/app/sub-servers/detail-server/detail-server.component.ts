import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GererServerService } from '../gerer-server.service';

@Component({
  selector: 'app-detail-server',
  templateUrl: './detail-server.component.html',
  styleUrls: ['./detail-server.component.css']
})
export class DetailServerComponent implements OnInit {
  oneServeur;
  ds : boolean = false;
  constructor(private actRoute : ActivatedRoute,
    private servService : GererServerService) { }

  ngOnInit(): void {
    this.actRoute.paramMap.subscribe(
      (p) => {
       this.oneServeur = this.servService.getServerById(p.get('id'))
      }
    );

    this.actRoute.queryParamMap.subscribe(
      (q) => {
         this.ds =  q.get('allowEdit') == '1' ? false : true;
      }
    )
  }

}
