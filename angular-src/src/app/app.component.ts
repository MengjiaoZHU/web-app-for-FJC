import { Component } from '@angular/core';
//import our Carousel Component


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
 

})
export class AppComponent {
  title = 'app works!';
  
  lightBoxClose = function() {
  document.querySelector(".lightbox").classList.add("closed");
}
}
