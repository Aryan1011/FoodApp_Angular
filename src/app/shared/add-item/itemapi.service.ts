import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root',
  })
  export class itemApiService{
    domain:String="http://localhost:8080";
    constructor(private httpclient: HttpClient) {}

    addItem(obj:any):Observable<any>{
        return this.httpclient.post(`${this.domain}/item/add`,obj);
    }

    getItems(): Observable<any>{
        return this.httpclient.get("http://localhost:8080/item/get")
    }

    // Pass a string in object
    getItemByParam(obj:any):Observable<any>{
        let param1 = new HttpParams().set("id",obj.name);
        return this.httpclient.get("http://localhost:8080/item/getbycategory",{params:param1});
    }

    getSingleItem(id:number):Observable<any>{
        return this.httpclient.get(`${this.domain}/item/get/${id}`)
    }


    deleteById(id:number):Observable<any>{
        return this.httpclient.delete(`${this.domain}/item/delete/${id}`)
    }

    updateItem(obj:any):Observable<any>{
        return this.httpclient.put(`${this.domain}/item/update`,obj);
    }

    getByView():Observable<any>{
        return this.httpclient.get(`${this.domain}/item/getbyview`);
    }

  }