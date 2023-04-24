import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms'
import { categoryApiService } from '../manage-category/categoryapi.service';
import { itemApiService } from './itemapi.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  categories:any;
  categoryName:any;
  form:any;
  // defaultPath:string="../../../assets/Images/dishes/";

  constructor(fb:FormBuilder, private _categoryApiService:categoryApiService, private _itemApiService:itemApiService,private route:ActivatedRoute
    ,private router:Router) {
    this.form= fb.group({
      itemName:['',Validators.required],
      itemCost:['',Validators.required],
      itemDesc:['',[
        Validators.required
      ]],
      itemImage:['',Validators.required]
    })
   }

  ngOnInit(): void {
    this._categoryApiService.getAllCategories()
    .subscribe(data=>{
      this.categories=data;
    })

    this.route.paramMap.subscribe(value=>{
      this.categoryName = value.get('id');
    })

  }
  get fc(){
    return this.form.controls;
   }

   onSubmit(){
    return this._itemApiService.addItem({
      itemName:this.form.value.itemName,
      itemDesc:this.form.value.itemDesc,
      itemCost:this.form.value.itemCost,
      itemCategory:this.categoryName,
      itemImage:this.form.value.itemImage.replace(/^.*\\/, "")
    })
    .subscribe(data=>{
      alert("Item Added");
      this.router.navigate(['/admin/manage-item']);
    },
    error=>{
      alert("Item with same name exists");
    })
   }

}
