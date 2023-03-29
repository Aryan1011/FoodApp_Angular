import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms'
@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {
  
  item={
    "name":"pulav",
    "cost":100,
    "Desc":"Veg-Pulav",
    "category":"North-Indian",
    "image":"../../../assets/Images/homeCook.png"
  }
  
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
  form:any;
  constructor(fb:FormBuilder) {
    this.form= fb.group({
      itemName:[this.item.name,Validators.required],
      itemCost:['',Validators.required],
      itemDesc:['',[
        Validators.required
      ]],
      itemCategory:['',[Validators.required]],
      itemImage:['',Validators.required]
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
