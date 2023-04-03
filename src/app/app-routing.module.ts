import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';import { AddItemComponent } from './shared/add-item/add-item.component';
import { LandingComponent } from './shared/landing/landing.component';
import { RegisterComponent } from './shared/register/register.component';
import { LoginComponent } from './shared/login/login.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { AuthGuard } from './guards/auth.guard';
import { UserGuard } from './guards/user.guard';

const routes: Routes = [
  {
    path:'landing',
    component:LandingComponent
  },
  {
    path: 'register',
    component:RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '', redirectTo:'/landing', pathMatch:'full'
  },
  {
    path:'admin', canActivate:[AuthGuard], loadChildren:()=>import('src/app/modules/admin/admin.module').then(m=>m.AdminModule),
  },
  {
    path:'user', canActivate:[UserGuard], loadChildren:()=>import('src/app/modules/user/user.module').then(m=>m.UserModule)
  },
  {
    path:'**', component:NotFoundComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
