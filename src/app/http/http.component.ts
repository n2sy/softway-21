import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {
  link = "https://jsonplaceholder.typicode.com/ushhhers";

  constructor(private httpclient : HttpClient) { }

  ngOnInit(): void {
    this.httpclient.get(this.link).subscribe(
      (result) => {
        console.log(result);
        
      },
      (error) => {
        console.log(error);
        
      },
      () => {
        console.log("That's all !!!!");
        
      }
    )
  }

}
