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
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { adminApiService } from 'src/app/services/admin/adminapi.service';
import { ManageItemComponent } from './manage-item/manage-item.component';

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
    ManageItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
   BrowserModule,
   AppRoutingModule
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
    ManageItemComponent
  ],
    providers:[adminApiService]

})
export class SharedModule { }
