import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';
import { productsTableComponent } from "./products-table/products-table.component";
import { EditproductComponent } from './edit-product/edit-product.component';
import { NewProductComponent } from './new-product/new-product.component';
import { ProductsChartsComponent } from './products-charts/products-charts.component';

const routes: Routes = [
  {path:'',component: productsTableComponent},
  {path:'edit-product/:id',component:EditproductComponent},
  {path:'new-product',component: NewProductComponent},
  {path:'products-charts',component:ProductsChartsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }