import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ItemsComponent } from 'src/app/shared/items/items.component';
import { FoodcartComponent } from 'src/app/shared/foodcart/foodcart.component';
import { CartComponent } from 'src/app/shared/cart/cart.component';
import { MyOrdersComponent } from 'src/app/shared/my-orders/my-orders.component';
import { HelpComponent } from 'src/app/shared/help/help.component';

const routes: Routes = [
  {
    path:'',component:UserDashboardComponent,
    children:[
      {path:'items',component:ItemsComponent},
      {path:'help',component:HelpComponent},
      {path:'foodcart/:id',component:FoodcartComponent},
      {path:'cart',component:CartComponent},
      {path:'my-orders/:id',component:MyOrdersComponent},
      {path:'',redirectTo:'user/items',pathMatch:'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
