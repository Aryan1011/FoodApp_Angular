import { Component, OnInit } from '@angular/core';
import { itemApiService } from '../add-item/itemapi.service';
import { categoryApiService } from '../manage-category/categoryapi.service';

@Component({
  selector: 'app-manage-item',
  templateUrl: './manage-item.component.html',
  styleUrls: ['./manage-item.component.css'],
})
export class ManageItemComponent implements OnInit {
  categories:any;
  items:any;
  initial:boolean=true;
  cName:any;
  ratings:any=[4.7,4.2,4.8,4.6,4.3,4.8,4.1,4.2,4.3,4.5,4.9]
  serves:any=[1,1,2,2,1,2,1,2,1,1,2,2,1,1,2]
  constructor(
    private _itemApiService: itemApiService,private _categoryApiService:categoryApiService
    
  ) {}

  ngOnInit(): void {
    this.getTrueCategories();
    }

    getTrueCategories(){
      this._categoryApiService.getTrueCategories()
      .subscribe(data=>{
        this.categories=data;
      })
    }


    onDelete(id:number,c:String){
      this._itemApiService.deleteById(id)
      .subscribe(data=>{
        alert("Status Changed");
        this.show(c);
      })
    }

    
    show(s:String){
      this.initial=false;
      this.cName=s;
      this._itemApiService.getItemByParam({name:s})
      .subscribe(data=>{
        this.items=data;
      })
    }
    
  }

