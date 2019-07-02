import { WINDOW } from '@ng-toolkit/universal';
import { Component , Inject} from '@angular/core';
import { EasyBookingComponent } from './modules/easy-booking/easy-booking.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  hideNavigation: boolean = true;
 constructor(@Inject(WINDOW) private window: Window) {}

  onActivate(event) {
    if(event instanceof EasyBookingComponent){
      this.hideNavigation = false;
    }else{ 
      this.hideNavigation = true;
    }
    console.log(event instanceof EasyBookingComponent);
    this.window.scroll(0,0);
  }
}
