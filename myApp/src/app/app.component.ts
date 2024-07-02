import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';
  t1 = 'Shivang';
  s1 = 'This is my App';
  flag = false;
  // flag = true;
  cities = ['Ahmedabad', 'Vadodara', 'Surat', 'Gandhinagar'];
  onClick(){
    alert("Button Clicked");
  }
}
