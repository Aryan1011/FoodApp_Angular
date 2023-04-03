import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { cartOrder } from './cartOrder';
import { Item } from './item';
import { CartItem } from './cartItem';
import { Pair } from './Pair';
@Injectable({
  providedIn: 'root',
})

export class foodcartApiService{
    domain:String="http://localhost:8080";
    constructor(private httpclient: HttpClient) {}

    private cart:cartOrder=new cartOrder();

    makeCart(obj:any):Observable<any>{
        obj.customerId=localStorage.getItem('customerId');
        var arr:Pair[]=[];
        obj.orderItems.forEach((element:CartItem)=>{
            arr.push({itemQuantity:element.itemQuantity,itemId: element.food?.itemId});
        })


        var a={
            customerId:obj.customerId,
            cartCost:obj.totalPrice,
            cartItems:arr
        }
        console.log(a);
        return this.httpclient.post(`${this.domain}/foodcart/makecart`,a);
    }

    getCart(id:number):Observable<any>{
        return this.httpclient.get(`${this.domain}/foodcart/getcart/${id}`)
    }

    getCustomerCarts(id:number):Observable<any>{
        return this.httpclient.get(`${this.domain}/foodcart/getcustomercarts/${id}`)
    }


   addToCart(food:Item):void{
        let cartItem = this.cart.orderItems?.find(item=> item.food?.itemId===food.itemId)
        if(cartItem){
            this.changeQuantity(food.itemId!, cartItem.itemQuantity!+1);
            return;
        }
        this.cart.orderItems?.push(new CartItem(food));
   }

   removeFromCart(foodId:number):void{
    this.cart.orderItems= this.cart.orderItems?.filter(item=> item.food?.itemId!=foodId);
   }

   changeQuantity(foodId:number, quantity:number){
        let cartItem = this.cart.orderItems?.find(item=> item.food?.itemId===foodId);
        if(!cartItem) return;
        cartItem.itemQuantity=quantity;
   }

   displayCart():cartOrder{
    return this.cart;
   }


}