import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api-json',
  templateUrl: './api-json.component.html',
  styleUrls: ['./api-json.component.css']
})
export class ApiJsonComponent implements OnInit {
  url = 'https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0';

  json = '';
  item : string[] = [];

  constructor(private http: HttpClient) { 
    this.http.get(this.url).toPromise().then(data =>{
      //console.log(data.valueOf());
      this.json = JSON.stringify(data);
    });
  }

  ngOnInit(): void {
  }

}
