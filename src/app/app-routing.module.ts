import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';;
import { LandingComponent } from './shared/landing/landing.component';
import { LoginComponent } from './shared/login/login.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { RegisterComponent } from './shared/register/register.component';

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
    path:'admin', loadChildren:()=>import('./modules/admin/admin.module').then(mod=>mod.AdminModule),
  },
  {
    path: '', redirectTo:'/landing', pathMatch:'full'
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
