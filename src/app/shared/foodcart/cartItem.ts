import { Item } from "./item";

export class CartItem{
        constructor(item:Item){
            this.food=item;
        }
        food?: Item;
        itemQuantity?:number=1;
    
        get price():number{
            return this.food?.itemCost!*this.itemQuantity!;
        }
    
    }
