import { Component, OnInit } from '@angular/core';
import { productsService } from '../products.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {

  name: string;
  stock: string;
  price: string;
  active: string;
  date_added: string;

  constructor(private productsService:productsService,private router:Router) { }

  ngOnInit() {
  }
  addproduct(){
    const product={
      name:this.name,
      stock:this.stock,
      price:this.price,
      active:this.active,
      date_added:this.date_added

    };
    this.productsService.newproduct(product);
    this.router.navigate(['/']);
  }
}