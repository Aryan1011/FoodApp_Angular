import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class categoryApiService {
  
    domain:String="http://localhost:8080";


  constructor(private httpclient: HttpClient) {}

  getAllCategories(): Observable<any> {
    return this.httpclient.get(`${this.domain}/category/get`);
  }

  getCategoryByName(id: number): Observable<any> {
    return this.httpclient.get(`${this.domain}/category/get/${id}`);
  }

  deleteCategoryByName(obj: any): Observable<any> {
    return this.httpclient.delete(
      `${this.domain}/category/delete/${obj.name}`
    );
  }

  addCategoryByName(obj:any): Observable<any> {
    
    return this.httpclient.post(`${this.domain}/category/add`, obj);
  }
}
