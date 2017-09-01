import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import {AuthService} from '../../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	username: String;
	email: String;
	password: String;
  phone: String;

  header = 'Already have an account?';
  subtitle = 'Create your account';
  usernm = 'Username';
  mail = 'Email';
  passwrd = 'Password';
  phonenum = ' Phone';

//anytime when use a service in the component, we need to inject 
  constructor(private validateService: ValidateService, 
              private flashMessage: FlashMessagesService,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
  	const user = {
  		username: this.username,
  		email: this.email,
  		password: this.password,
      phone: this.phone
  	}

    //required fields
    if(!this.validateService.validateRegister(user)){
      //not all field
      this.flashMessage.show('Please fill all fields', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    if(!this.validateService.validateEmail(user.email)){
      this.flashMessage.show('Please use a validate email', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    //register user
    this.authService.registerUser(user).subscribe(data => {
      if(data.success){
        this.flashMessage.show('You are now registered and can log in', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/login']);
      } else{
        this.flashMessage.show('Something Wrong', {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/register']);
      }
    });
  }
}