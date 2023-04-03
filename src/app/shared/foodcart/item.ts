import { Category } from "../manage-category/category";

export class Item{
    itemId?:number;
    itemName?:String;
    itemCost?:number;
    itemDesc?:String;
    itemCategory?:Category;
    itemStatus?:String;
}