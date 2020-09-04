import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorHandlerComponent } from './shared-material/error-handler/error-handler.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'products/1',
    pathMatch: 'full'
  },
  {
    path: 'products/:id',
    component: ProductDescriptionComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: '**',
    component: ErrorHandlerComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
