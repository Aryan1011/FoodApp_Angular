import { CartItem } from "./cartItem";

export class cartOrder{
    customerId?: number | undefined;
    cartCost?:number  | undefined;
    orderItems?:CartItem[]=[];



    get totalPrice(): number{
        let tp=0;
        this.orderItems?.forEach(item=>{
            tp+=item.price;
        })
        return tp; 
    }

}