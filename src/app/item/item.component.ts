import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personne } from '../models/personne';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() onePerson : Personne;
  @Output() persToSend = new EventEmitter<Personne>();
  constructor() { }

  ngOnInit(): void {
  }

  sendToList() {
    this.persToSend.emit(this.onePerson);
  }
}
