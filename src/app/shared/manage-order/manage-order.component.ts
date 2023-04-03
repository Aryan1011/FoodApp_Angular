import { Component, OnInit } from '@angular/core';
import { orderApiService } from './orderapi.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-manage-order',
  templateUrl: './manage-order.component.html',
  styleUrls: ['./manage-order.component.css']
})
export class ManageOrderComponent implements OnInit {
  pendingOrders:any;
  acceptedOrders:any;
  cancelledOrders:any;
  deliveredOrders:any;
  constructor(private _orderApiService:orderApiService, private router:Router) { }

  ngOnInit(): void {
    this._orderApiService.getOrderFromStatus({status:"Pending"})
    .subscribe(data=>{
      this.pendingOrders=data;
    })
    this._orderApiService.getOrderFromStatus({status:"Accepted"})
    .subscribe(data=>{
      this.acceptedOrders=data;
    })
    this._orderApiService.getOrderFromStatus({status:"Cancelled"})
    .subscribe(data=>{
      this.cancelledOrders=data;
    })
    this._orderApiService.getOrderFromStatus({status:"Delivered"})
    .subscribe(data=>{
      this.deliveredOrders=data;
    })

  }

  change(s:string,id:any){
    var obj={
      orderId:id,
      orderStatus:s
    }
    this._orderApiService.changeOrderStatus(obj)
    .subscribe(data=>{
      alert("Status Changed");
    })
    this.ngOnInit();
    this.router.navigate(['admin/manage-order'])
  }

}
