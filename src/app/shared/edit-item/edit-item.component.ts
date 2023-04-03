import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms'
import { itemApiService } from '../add-item/itemapi.service';
import { categoryApiService } from '../manage-category/categoryapi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {
  
  item:any;
  categories:any;
  id?:any
  

  form:any;
  constructor(fb:FormBuilder,private _itemApiService:itemApiService, private _categoryApiService:categoryApiService,private route:ActivatedRoute) {
    this.route.paramMap.subscribe(value=>{
      this.id = value.get('id');
      this._itemApiService.getSingleItem(this.id)
      .subscribe(data=>{
        this.item=data;
      })
    })
    this.form= fb.group({
      
      // itemName:['',Validators.required],
      itemCost:['',Validators.required],
      itemDesc:['',[
        Validators.required
      ]],
      // itemCategory:[this.item?.itemName,[Validators.required]],
      // itemImage:['',Validators.required]
    })
   }

  ngOnInit(): void {
    this._categoryApiService.getAllCategories()
    .subscribe(data=>{
      this.categories=data;
    })

  }
  get fc(){
    return this.form.controls;
   }

   onSubmit(){
    this._itemApiService.updateItem({
      itemName:this.item.itemName,
      itemCost:this.form.value.itemCost,
      itemDesc:this.form.value.itemDesc,
      itemCategory:this.item.category.categoryName,

    })
    .subscribe(data=>{
      alert("Record Updated");
    })
   }

}
