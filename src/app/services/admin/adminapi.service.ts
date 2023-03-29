import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";
@Injectable({
    providedIn:'root'
})
 export class adminApiService{

    constructor(private httpclient:HttpClient){}

    getCategory(): Observable<any>{
        return this.httpclient.get("http://localhost:8080/category/get")
    }
    getItems(): Observable<any>{
        return this.httpclient.get("http://localhost:8080/item/get")
    }

    getItemByParam(s:String):Observable<any>{
        let param1 = new HttpParams().set("id",s.toLocaleLowerCase());
        return this.httpclient.get("http://localhost:8080/category/getbycategory",{params:param1});
    }

    // getItemByCategory(body:any): Observable<any>{
    //     console.log(body);
    //     return this.httpclient.post("http://localhost:8080/category/getbycategory", JSON.stringify(body));
    // }


 }