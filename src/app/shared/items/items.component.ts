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

  data:any

 
  constructor(private _itemApiService:itemApiService, private _categoryApiService:categoryApiService,
     private _foodcartApiService:foodcartApiService,
     private router:Router) { }


  ngOnInit(): void {
   
    this._itemApiService.getByView()
    .subscribe(data=>{
      this.data=data;
    })

    }

    addToCart(item:Item){
      this._foodcartApiService.addToCart(item);
      this.router.navigateByUrl('/user/cart');
    }
        
}
