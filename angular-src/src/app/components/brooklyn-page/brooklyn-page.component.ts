import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';


@Component({
  selector: 'app-brooklyn-page',
  templateUrl: './brooklyn-page.component.html',
  styleUrls: ['./brooklyn-page.component.css']
})
export class BrooklynPageComponent implements OnInit {

  constructor( private location: Location ) { }

    goBack(){
  		this.location.back();
  }

  ngOnInit() {
  }

}
