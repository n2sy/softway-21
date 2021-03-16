import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-msword',
  templateUrl: './msword.component.html',
  styleUrls: ['./msword.component.css']
})
export class MswordComponent implements OnInit {
  listFonts = ['', 'Garamond', 'Verdana', 'Phosphate'];
  bg;
  cl;
  size;
  font;


  constructor() { }

  ngOnInit(): void {
  }

  changeSize(i) {
    console.log(i.value);

    //this.size = i.value + 'px';
    this.size = `${i.value}px`; //template string
    
  }

}
