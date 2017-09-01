import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';


@Component({
  selector: 'app-bronx-page',
  templateUrl: './bronx-page.component.html',
  styleUrls: ['./bronx-page.component.css']
})
export class BronxPageComponent implements OnInit {

  constructor( private location: Location) { }

  goBack(){
  		this.location.back();
  }

  ngOnInit() {
  }

}
