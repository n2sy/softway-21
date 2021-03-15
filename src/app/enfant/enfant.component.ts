import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.css']
})
export class EnfantComponent implements OnInit {
  @Input() ministere : string = "MERS";
  @Output() msg = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  sendMsg() {
    this.msg.emit('Message de la part du fils');
  }

}
