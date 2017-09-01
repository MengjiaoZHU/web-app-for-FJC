import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.css']
})
export class TipsComponent implements OnInit {

	title = 'Tech Safety Tips';

	subtitle = 'Learn how to use your tech safely';

	internet = 'INTERNET';
	info_1 = 'Clear your browsing history so you cannot be tracked.';
	iphone = 'Clear Browsing History on iPhone';
	android = 'Clear Browsing History on Android';
	info_2 = 'Set your internet browser to “Private” mode to prevent tracking of your history.';
	iphone_2 = 'Set Private Mode on iPhone';
	android_2 = 'Set Private Mode on Android';

	password = 'PASSWORD SECURITY';
	line_1 = 'It’s important to keep your password secret.';
	line_2 = 'Change it immediately if your partner knows your password.';
	line_3 = 'Don’t use personal information when setting your password (ex. Birthday, children’s names)';
	line_4 = 'Set a Secure Password';

	social = 'SOCIAL MEDIA';
	sline_1 = 'Anything posted on any social media network is viewable by the public and once posted, can be tracked.';
	sline_2 = 'How to Block Users on Facebook: Log into your account. Click on the privacy icon in the top right hand corner of the page. On the main privacy 				settings page, you can block specific users from seeing your profile or only allow them to see part of it.';

	location = 'LOCATION TRACKING';
	lline_1 = 'Never leave your phone location services (GPS) turned on if you are worried about being tracked by your partner.';
	liphone = 'How to Turn off GPS on iPhone';
	landroid = 'How to Turn off GPS on Android';




  constructor() { }

  ngOnInit() {
  }

}
