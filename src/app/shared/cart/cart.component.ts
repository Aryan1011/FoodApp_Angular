import { Component, OnInit } from '@angular/core';
import { foodcartApiService } from '../foodcart/foodcartapi.service';
import { cartOrder } from '../foodcart/cartOrder';
import { CartItem } from '../foodcart/cartItem';
import { Router } from '@angular/router';
import { orderApiService } from '../manage-order/orderapi.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private _foodcartApiService:foodcartApiService, private router:Router, private _orderApiService:orderApiService) {
     this.setCart();
    }


  cart!:cartOrder
    cartId?:number;

  ngOnInit(): void {
    
  }

  removeFromCart(cartItem:CartItem){
    this._foodcartApiService.removeFromCart(cartItem.food?.itemId!);
    this.setCart();
  }
  setCart(){
    this.cart=this._foodcartApiService.displayCart();
  }
  changeQuantity(cartItem:CartItem, quantity:string){
    const quan = parseInt(quantity);
    this._foodcartApiService.changeQuantity(cartItem.food?.itemId!,quan);
    this.setCart();
  }
  goToItems(){
    this.router.navigateByUrl('user/items');
  }

  makeOrder(){
    this._foodcartApiService.makeCart(this.cart)
    .subscribe((data)=>{
      this._orderApiService.makeOrder(data.cartId)
      .subscribe(data=>{
        alert("Food Ordered");
        this.router.navigate(['user/items'])
      })
    })
  }

}
