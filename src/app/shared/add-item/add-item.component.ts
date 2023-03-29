import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms'
@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
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
      itemName:['',Validators.required],
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
