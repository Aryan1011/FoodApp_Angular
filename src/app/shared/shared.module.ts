import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { AddItemComponent } from './add-item/add-item.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { FooterComponent } from './footer/footer.component';
import { ItemsComponent } from './items/items.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ManageCategoryComponent } from './manage-category/manage-category.component';
import { ManageOrderComponent } from './manage-order/manage-order.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ViewOrderComponent } from './view-order/view-order.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManageItemComponent } from './manage-item/manage-item.component';
import { HttpClientModule } from '@angular/common/http';
import { categoryApiService } from './manage-category/categoryapi.service';
import { orderApiService } from './manage-order/orderapi.service';
import { FoodcartComponent } from './foodcart/foodcart.component';
import { foodcartApiService } from './foodcart/foodcartapi.service';
import { CartComponent } from './cart/cart.component';
import { itemApiService } from './add-item/itemapi.service';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { RouterModule } from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';
import { HelpComponent } from './help/help.component';
import { MetricComponent } from './metric/metric.component'
import { metricApiService } from './metric/metricapi.service';
import { NgChartsModule } from 'ng2-charts';
@NgModule({
  declarations: [
    NavbarComponent,
    AddItemComponent,
    EditItemComponent,
    FooterComponent,
    ItemsComponent,
    LandingComponent,
    LoginComponent,
    RegisterComponent,
    ManageCategoryComponent,
    ManageOrderComponent,
    NotFoundComponent,
    ViewOrderComponent,
    ManageItemComponent,
    FoodcartComponent,
    CartComponent,
    MyOrdersComponent,
    HelpComponent,
    MetricComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
   RouterModule,
   HttpClientModule,
   NgxPaginationModule,
   NgChartsModule,
  ],
  exports:[NavbarComponent,
    AddItemComponent,
    EditItemComponent,
    FooterComponent,
    ItemsComponent,
    LandingComponent,
    LoginComponent,
    RegisterComponent,
    ManageCategoryComponent,
    ManageOrderComponent,
    NotFoundComponent,
    ViewOrderComponent,
    ManageItemComponent,
    HelpComponent
  ],
    providers:[ categoryApiService,orderApiService,foodcartApiService,itemApiService,metricApiService]

})
export class SharedModule { }
