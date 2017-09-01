import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-staten-page',
  templateUrl: './staten-page.component.html',
  styleUrls: ['./staten-page.component.css']
})
export class StatenPageComponent implements OnInit {

  constructor( private location: Location ) { }

  goBack(){
  		this.location.back();
  }

  ngOnInit() {
  }

}
