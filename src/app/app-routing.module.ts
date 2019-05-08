import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductComponent} from './product/product.component';
import {ProductAddClassicFormComponent} from './product/product-add-classic-form/product-add-classic-form.component';
import {ProductAddReactiveFormComponent} from './product/product-add-reactive-form/product-add-reactive-form.component';
import {LoginComponent} from './login/login.component';
import {LoginGuard} from './login/login.guard';

const routes: Routes = [
  {path: 'products', component: ProductComponent},
  {path: '', redirectTo: 'products', pathMatch: 'full'},
  {path: 'products/category/:categoryId', component: ProductComponent},
  {path: 'product-add-classic', component: ProductAddClassicFormComponent, canActivate: [LoginGuard]},
  {path: 'product-add-reactive', component: ProductAddReactiveFormComponent, canActivate: [LoginGuard]},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
