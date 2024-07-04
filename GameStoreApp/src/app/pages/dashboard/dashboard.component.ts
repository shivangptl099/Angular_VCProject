import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  cart: string[] = [];

  addToCart(gameName: string) {
    this.cart.push(gameName);
  }
  removeFromCart(gameName: string){
    let index =  this.cart.indexOf(gameName);
    this.cart.splice(index,1);
  }
  placeOrder(){
    if(this.cart.length == 0) alert("No items in Cart.");
    else{
      alert("Order Placed !");
      this.cart.length = 0;
    }
  }
}
