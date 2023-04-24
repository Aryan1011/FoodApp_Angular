import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class metricApiService {
  domain: String = 'http://localhost:8080';
  constructor(private httpclient: HttpClient) {}

  getTodayMetrics(): Observable<any> {
    return this.httpclient.get(`${this.domain}/metric/todaymetrics`);
  }

  getByDateMetrics(obj: any): Observable<any> {
    return this.httpclient.post(`${this.domain}/metric/datemetrics`, obj);
  }

  getTodayItemQuantity(): Observable<any> {
    return this.httpclient.get(
      `http://localhost:8080/metric/todayitemquantity`
    );
  }

  getDateItemQuantity(obj: any): Observable<any> {
    return this.httpclient.post(
      `http://localhost:8080/metric/dateitemquantity`,
      obj
    );
  }

  getTodayCategoryPercentage(): Observable<any> {
    return this.httpclient.get(
        `http://localhost:8080/metric/todaycategorypercentage`
      );
  }

  getDateCategoryPercentage(obj: any): Observable<any> {
    return this.httpclient.post(
      `http://localhost:8080/metric/datecategorypercentage`,obj
    );
  }
}
