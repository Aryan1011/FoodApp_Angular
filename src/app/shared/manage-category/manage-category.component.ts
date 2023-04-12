import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms'
import { categoryApiService } from './categoryapi.service';

@Component({
  selector: 'app-manage-category',
  templateUrl: './manage-category.component.html',
  styleUrls: ['./manage-category.component.css']
})
export class ManageCategoryComponent implements OnInit {

  form:any;
  categories:any;

  constructor(fb:FormBuilder, private _categoryApiService:categoryApiService) { 
    this.form= fb.group({
      categoryName:['',[
        Validators.required
      ]]
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
    this._categoryApiService.addCategoryByName(this.form.value)
    .subscribe((data)=>{
      this.ngOnInit();
      alert("Category inserted");
    })
   }

   onDelete(name:String){
      this._categoryApiService.deleteCategoryByName({name:name})
      .subscribe(data=>{
        this.ngOnInit();
        alert("Status Changed");
      })
   }

}
