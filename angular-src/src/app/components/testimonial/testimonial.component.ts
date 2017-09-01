import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {

	headline = 'Testimonials';
	subtitle = 'Survivors share their experiences and how their choice to visit a Family Justice Center transformed their life.';

	personOne = 'Here Dummy Name ';
	descriptionOne= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis felis dolor vitae.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis felis dolor vitae.';

	personTwo = 'Here Dummy Name ';
	descriptionTwo = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis felis dolor vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis felis dolor vitae.';
								
	personThree = 'Here Dummy Name ';
	descriptionThree = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis felis dolor vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis felis dolor vitae.';

	about = 'ABOUT COMPANY';
	social = 'SOCIAL PRESENCE';
	location = 'PHYSICAL LOCATION';


  constructor() { }

  ngOnInit() {
  }

}
