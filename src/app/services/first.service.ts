import { Injectable } from '@angular/core';
import { SecondService } from './second.service';

@Injectable({
  providedIn: 'root'
})
export class FirstService {

  constructor(private secondService : SecondService) { }

  showMsg(msg) {
    console.log(msg + "!!!!!");
    this.secondService.showInfos();
    
  }
}
