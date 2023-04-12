import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class orderApiService{
    domain:String="http://localhost:8080";
  constructor(private httpclient: HttpClient) {}

  makeOrder(id:number):Observable<any>{
    return this.httpclient.get(`${this.domain}/order/add/${id}`);
  }

  getCustomerOrders(id:number):Observable<any>{
    return this.httpclient.get(`${this.domain}/order/getcustomerorders/${id}`);
  }

  getOrderDetials(id:number):Observable<any>{
    return this.httpclient.get(`${this.domain}/order/get/${id}`);
  }

  getOrderFromStatus(obj:any):Observable<any>{
    return this.httpclient.get(`${this.domain}/order/getorderwithstatus/${obj.status}`);
  }

  changeOrderStatus(obj:any):Observable<any>{
    return this.httpclient.put(`${this.domain}/order/updatestatus`,obj);
  }

  getAll():Observable<any>{
    return this.httpclient.get(`${this.domain}/order/get`);
  }
  getByDate(id:string):Observable<any>{
    return this.httpclient.get(`${this.domain}/order/getbydate/${id}`);
  }

}