import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { orderApiService } from '../manage-order/orderapi.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  customerId:any;
  constructor(private route:ActivatedRoute,private _orderApiService:orderApiService) { }

  myOrders:any


  ngOnInit(): void {
    this.route.paramMap.subscribe(value=>{
      this.customerId = value.get('id');
      this._orderApiService.getCustomerOrders(this.customerId)
      .subscribe(data=>{
        this.myOrders=data;
      })
    })
  }

}
