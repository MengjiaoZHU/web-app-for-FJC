import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService:AuthService,
  			  private router: Router,
  			  private flashMessage: FlashMessagesService) { }

  home = 'HOME';
  srvo = 'SERVICES';
  fjc= 'VIRTUAL TOUR';
  tech = 'TECH SAFETY';
  test = 'TESTIMONIALS';
  prepare = 'PREPARE FOR YOUR VISIT';
  faq = 'FAQ';

  dashboard = 'DASHBOARD';
  profile = 'PROFILE';
  register = 'REGISTER';
  login = 'LOGIN';
  escape = 'ESCAPE';
  logout = 'LOGOUT';

  ngOnInit() {
  }

  onLogoutClick(){
  	this.authService.logout();
  	this.flashMessage.show('You are logged out', {
  		cssClass:'alert-success',
  		timeout: 3000
  	});
  	this.router.navigate(['/login']);
  	return false;
  };

  exit(){
    window.history.forward();
    window.open("http://weather.com", "_newtab");
    window.location.replace('http://google.com');
    
  };
}

