import { Component, OnInit } from '@angular/core';
import { itemApiService } from '../add-item/itemapi.service';
import { categoryApiService } from '../manage-category/categoryapi.service';
import { foodcartApiService } from '../foodcart/foodcartapi.service';
import { Item } from '../foodcart/item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})

export class ItemsComponent implements OnInit {
  categories:any;
  items:any;
  initial:boolean=true;
  ratings:any=[4.7,4.2,4.8,4.6,4.3,4.8,4.1,4.2,4.3,4.5,4.9]
  serves:any=[1,1,2,2,1,2,1,2,1,1,2,2,1,1,2]
 
  isOpen?:boolean;


  constructor(private _itemApiService:itemApiService, private _categoryApiService:categoryApiService,
     private _foodcartApiService:foodcartApiService,
     private router:Router) { }


  ngOnInit(): void {
   this.getTrueCategories();
   this.setIsOpen();
  }
  setIsOpen(){
    if(localStorage.getItem("open")){
      this.isOpen=true;
    }
    else{
      this.isOpen=false;
    }
  }

  getTrueCategories(){
    this._categoryApiService.getTrueCategories()
    .subscribe(data=>{
      this.categories=data;
    })
  }


    addToCart(item:Item){
      this._foodcartApiService.addToCart(item);
      alert("Item Added");
      this.router.navigateByUrl('/user/items');
    }

    show(s:string){
      this.initial=false;
      this._itemApiService.getItemByTrueParam({name:s})
      .subscribe(data=>{
        this.items=data;
      })
    }   
}
