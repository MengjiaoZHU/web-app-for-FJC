import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-manhattan-page',
  templateUrl: './manhattan-page.component.html',
  styleUrls: ['./manhattan-page.component.css']
})
export class ManhattanPageComponent implements OnInit {

  constructor( private location: Location ) { }

    goBack(){
  		this.location.back();
 	}

  ngOnInit() {
  }

}
