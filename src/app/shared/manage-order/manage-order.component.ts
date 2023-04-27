import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { orderApiService } from './orderapi.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-manage-order',
  templateUrl: './manage-order.component.html',
  styleUrls: ['./manage-order.component.css']
})
export class ManageOrderComponent implements OnInit {
 

  page:number=1;
  count:number=0;
  tableSize:number=4;
  tableSizes:any=[5,10,15,20];
  show:string="displayWelcome"
  orders:any;
  Action:string="Accept"
  constructor(private _orderApiService:orderApiService, private router:Router) { }

  @ViewChild("myDate") myDate?: ElementRef;


  ngOnInit(): void {
   
  }
  

  getDelivered(){
    this._orderApiService.getOrderFromStatus({status:"Picked"})
    .subscribe(data=>{
      this.orders=data.reverse();
    })
  }

  getPending(){
    this._orderApiService.getOrderFromStatus({status:"Pending"})
    .subscribe(data=>{
      this.orders=data;
    })
  }

  getAccepted(){
    this._orderApiService.getOrderFromStatus({status:"Accept"})
    .subscribe(data=>{
      this.orders=data;
    })
  }

  getReady(){
    this._orderApiService.getOrderFromStatus({status:"Ready"})
    .subscribe(data=>{
      this.orders=data;
    })
  }


  getByDate(){
    this._orderApiService.getByDate(this.myDate?.nativeElement.value)
    .subscribe(data=>{
      console.log(data);
      this.orders=data;
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
      if(s=="Accept"){
        this.getPending();
      }
      else if(s=="Ready"){
        this.getAccepted();
      }
      else if(s=="Picked"){
        this.getReady();
      }
      else{  // picked
        this.getDelivered();
      }
    })
  }



  showNew(){
    this.show="new";
    this.Action="Accept"
    this.getPending();
    this.ngOnInit();

  }
  showPreparing(){
    this.show="preparing";
    this.Action="Ready"
    this.getAccepted();
    this.ngOnInit();
  }
  showReady(){
    this.show="ready";
    this.Action="Picked"
    this.getReady();
    this.ngOnInit();
  }
  showPast(){
    this.show="past";
    this.Action="null";
    this.getDelivered();
    this.ngOnInit();
  }

  onTableDataChange(event:any):void{
    this.page=event;
  }
  

}
