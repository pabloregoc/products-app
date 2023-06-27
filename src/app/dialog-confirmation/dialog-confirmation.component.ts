import { Component, Inject, OnInit } from '@angular/core';
import { productsService } from '../products.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-confirmation',
  templateUrl: './dialog-confirmation.component.html',
  styleUrls: ['./dialog-confirmation.component.scss']
})
export class DialogConfirmationComponent implements OnInit {

  productId: string;

  constructor(private productService:productsService, public dialogRef:MatDialogRef<DialogConfirmationComponent>, @Inject(MAT_DIALOG_DATA) public data:{productId:string}) { 
  this.productId= data.productId;}

  ngOnInit(){}
  
  confirm():void {
    this.productService.deleteproduct(this.productId);
    this.dialogRef.close();
  }

}
