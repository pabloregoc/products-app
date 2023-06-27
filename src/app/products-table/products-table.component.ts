import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { productsService } from '../products.service';
import { DialogConfirmationComponent } from '../dialog-confirmation/dialog-confirmation.component';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss']
})
export class productsTableComponent implements OnInit {
  products:any= [];
  productDetail:any;

  constructor(private productService: productsService, private router:Router, public dialog:MatDialog) { }

  ngOnInit() {
    this.productService.getproducts().subscribe(data=>{
      this.products=data;
    })
  }
viewproductDetail(product: any) {
  this.productDetail=product;
  this.productService.selectedproduct=this.productDetail;
  this.router.navigate(['/edit-product',this.productDetail.id])
}
openConfirmationDialog(productId: string): void{
  const dialogRef= this.dialog.open(DialogConfirmationComponent,{data:{productId:productId}});
}
}
