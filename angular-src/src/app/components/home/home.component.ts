import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {


	caption= 'SERVICES';

	subCaptionOne = 'YOUR VIRTUAL ALLY';
	detailOne = 'At the click of a button, get answers to all of your questions, tips on how to safely use technology, and information on the resources available to you.';

	subCaptionTwo = 'YOUR SAFE HARBOR';
	detailTwo = 'Services are free and available to all victims. You can get help regardless of your immigration status or the language you speak.';


	subCaptionThree = 'WALK-INS WELCOME';
	detailThree = 'Our door is always open for you,no appointment necessary. When you feel ready, simply walk in anytime, Monday - Friday, between 9:00 a.m. - 5:00 p.m.';


  constructor() { }

  ngOnInit() {
  }



}
