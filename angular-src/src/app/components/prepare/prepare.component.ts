import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prepare',
  templateUrl: './prepare.component.html',
  styleUrls: ['./prepare.component.css']
})
export class PrepareComponent implements OnInit {

	headline = 'Prepare for your  Visit';
	subtitle = 'Tips on preparation you can make before visiting a Family Justice Center';

	titleOne = 'Prepare your documents';
	paragraphOne = 'Gather all the documents that you need.';

	titleTwo = 'Manage your time';
	paragraphTwo = 'It will take more than two hours for your first visit...';

	titleThree = 'Take care of your children';
	paragraphThree = '...';

	about = 'ABOUT COMPANY';
	social = 'SOCIAL PRESENCE';
	location = 'PHYSICAL LOCATION';

  constructor() { }

  ngOnInit() {
  }

}
