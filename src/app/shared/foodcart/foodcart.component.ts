import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { foodcartApiService } from './foodcartapi.service';
@Component({
  selector: 'app-foodcart',
  templateUrl: './foodcart.component.html',
  styleUrls: ['./foodcart.component.css']
})
export class FoodcartComponent implements OnInit {


  foodcart:any;
  id:any

  constructor(private route:ActivatedRoute,private _foodcartApiService:foodcartApiService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value=>{
      this.id = value.get('id');
      this._foodcartApiService.getCart(this.id)
      .subscribe(data=>{
        this.foodcart=data;
      })
    })
  }

}
