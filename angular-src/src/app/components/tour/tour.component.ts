import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})
export class TourComponent implements OnInit {


title= 'Family Justice Centers';
subtitle = 'Family Justice Centers (FJC) provide clients access to civil, criminal and social services all under one room.';
subtitle_ = 'to see a list of all of the services offered.';
linkSubtitle = 'Click here';


  constructor(private authService:AuthService,
  			  private router: Router,
  			  private flashMessage: FlashMessagesService,
  			  private route: ActivatedRoute) 
  			  {
  			  	 this.route.fragment.subscribe ( f => {
         const element = document.querySelector ( "#" + f )
         if ( element ) element.scrollIntoView ( element )
     });
  			   }

           navigateBronx() {
              this.router.navigate(["bronx_page"])
           }
            
            navigateBrooklyn() {
              this.router.navigate(["brooklyn_page"])
            }

            navigateManhattan() {
              this.router.navigate(["manhattan_page"])
            }

            navigateQueens() {
              this.router.navigate(["queens_page"])
            }

            navigateStaten() {
              this.router.navigate(["staten_page"])
            }


  ngOnInit() {}

}