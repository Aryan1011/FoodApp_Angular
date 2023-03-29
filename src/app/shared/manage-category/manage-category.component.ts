import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms'
@Component({
  selector: 'app-manage-category',
  templateUrl: './manage-category.component.html',
  styleUrls: ['./manage-category.component.css']
})
export class ManageCategoryComponent implements OnInit {

  form:any;
  categories=[
    {
      id:1,
      name:"chinese"
    },
    {
      id:2,
      name:"North Indian"
    },
    {
      id:3,
      name:"Drinks"
    },
    {
      id:5,
      name:"Italian"
    }

  ]

  constructor(fb:FormBuilder) { 
    this.form= fb.group({
      categoryName:['',[
        Validators.required
      ]]
    })
  }

  ngOnInit(): void {
  }

  get fc(){
    return this.form.controls;
   }

   onSubmit(){
    console.log(this.form.value);
   }

}
