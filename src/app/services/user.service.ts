import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  domain:String="http://localhost:8080";
    constructor(private httpclient: HttpClient, private router:Router) {}

    addCustomer(obj:any):Observable<any>{
      var o={
        customerName:obj.name,
        customerPhone:obj.phone,
        customerPassword:obj.password,
        customerMail:obj.email,
        customerAddress:obj.address
      }
      return this.httpclient.post(`${this.domain}/customer/add`,o);
  }

  getAllCustomer():Observable<any>{
      return this.httpclient.get(`${this.domain}/customer/get`);
  }
  getCustomer(id:number):Observable<any>{
      return this.httpclient.get(`${this.domain}/customer/get/${id}`);
  }

  updateCustomer(obj:any):Observable<any>{
      return this.httpclient.put(`${this.domain}/customer/update`,obj);
  }

  login(obj:any):Observable<any>{
    console.log(obj);
      return this.httpclient.post(`${this.domain}/customer/login`,obj);
  }


  setCustomerId(id:string):void{
    localStorage.setItem('customerId',id);
  }

  getCustomerId():string|null{
    return localStorage.getItem('customerId');
  }

  isCustomerLoggedIn(){
    return this.getCustomerId()!=null;
  }

  logoutCustomer(){
    localStorage.removeItem('customerId');
    this.router.navigate(['login'])
  }


}
