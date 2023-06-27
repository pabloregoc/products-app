import { Component, OnInit } from "@angular/core";
import { productsService } from "../products.service";

@Component({
  selector: 'app-products-charts',
  templateUrl: './products-charts.component.html',
  styleUrls: ['./products-charts.component.scss']
})
export class ProductsChartsComponent implements OnInit {
  stockData=[];
  activeData=[];


  constructor(private productService:productsService) { }

  ngOnInit() {
    this.productService.getproducts().subscribe((products:any[])=>{
      const productsWithStock=products.filter((product)=>product.stock);
      const productsWithoutStock= products.filter((product)=>!product.stock);
      this.stockData=[
        {name:'Con Stock',
        value: productsWithStock.length},
        {name:'Sin Stock',
        value:productsWithoutStock.length}
      ]})
      this.productService.getproducts().subscribe((products:any[])=>{
        const productsWithPhone=products.filter((product)=>product.active);
        const productsWithoutPhone= products.filter((product)=>!product.active);
        this.activeData=[
          {name:'Activo',
          value: productsWithPhone.length},
          {name:'No Activo',
          value:productsWithoutPhone.length}
        ]
      })
  
  }
}
