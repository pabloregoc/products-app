import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { productsTableComponent } from './products-table/products-table.component';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatCard, MatCardModule, MatChipInput, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatTableModule, MatToolbarModule } from '@angular/material';
import { EditproductComponent } from './edit-product/edit-product.component';
import { FormsModule } from '@angular/forms';
import { NewProductComponent } from './new-product/new-product.component';
import { DialogConfirmationComponent } from './dialog-confirmation/dialog-confirmation.component';
import { ProductsChartsComponent } from './products-charts/products-charts.component';
import { NgxChartsModule }from '@swimlane/ngx-charts';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    productsTableComponent,
    EditproductComponent,
    NewProductComponent,
    DialogConfirmationComponent,
    ProductsChartsComponent,
  ],
entryComponents:[DialogConfirmationComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    NgxChartsModule,
    MatToolbarModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }