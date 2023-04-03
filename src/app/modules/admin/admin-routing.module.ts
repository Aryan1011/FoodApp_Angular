import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { ManageOrderComponent } from 'src/app/shared/manage-order/manage-order.component';
import { ManageCategoryComponent } from 'src/app/shared/manage-category/manage-category.component';
import { ManageItemComponent } from 'src/app/shared/manage-item/manage-item.component';
import { EditItemComponent } from 'src/app/shared/edit-item/edit-item.component';
import { AddItemComponent } from 'src/app/shared/add-item/add-item.component';
import { FoodcartComponent } from 'src/app/shared/foodcart/foodcart.component';

const routes: Routes = [
  {
    path:'',component:AdminDashboardComponent,
    children:[
      {path:'manage-order',component:ManageOrderComponent},
      {path:'manage-category',component:ManageCategoryComponent},
      {path:'manage-item',component:ManageItemComponent},
      {path:'edit-item/:id',component:EditItemComponent},
      {path:'add-item/:id',component:AddItemComponent},
      {path:'foodcart/:id',component:FoodcartComponent},
      {path:'',redirectTo:'admin/manage-order',pathMatch:'full'},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
