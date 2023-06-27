import { Component, OnInit } from '@angular/core';
import { productsService } from '../products.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditproductComponent implements OnInit {
  product:any;

  constructor(private productsService: productsService, private router: Router) { }

  ngOnInit() {
    this.product=this.productsService.selectedproduct;
  }
  updateproduct():void{
    this.productsService.updateproduct(this.product);
    this.router.navigateByUrl("/",{replaceUrl:true});
  }
}
