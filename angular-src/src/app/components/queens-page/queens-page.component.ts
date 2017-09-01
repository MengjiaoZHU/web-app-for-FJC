import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-queens-page',
  templateUrl: './queens-page.component.html',
  styleUrls: ['./queens-page.component.css']
})
export class QueensPageComponent implements OnInit {

  constructor( private location: Location ) { }

      goBack(){
  		this.location.back();
  }

  ngOnInit() {
  }

}
