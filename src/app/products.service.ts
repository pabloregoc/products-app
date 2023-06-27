import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class productsService {
public selectedproduct:any;
  constructor(private http:HttpClient) { }
  getproducts(): Observable<any>{
    const url='http://localhost:30030/products/getAll';
    const headers = new HttpHeaders() 
      .set('Authorization', 'Basic ' + btoa('demo:demo')) 
      .set('X-User', 'demo') 
      .set('X-Password', 'demo');
      return this.http.get<any>(url,{headers});
  }
  updateproduct(product:any):void{
    const url="http://localhost:30030/products/update";
    const body=product;
    const headers = new HttpHeaders() 
      .set('Authorization', 'Basic ' + btoa('demo:demo')) 
      .set('X-User', 'demo') 
      .set('X-Password', 'demo');
      this.http.put(url, body, { headers }).subscribe( (response) => { console.log(response); }, (error) => { console.error(error); } );
  }
  newproduct(product:any):void{
    const url="http://localhost:30030/products/add";
    const body=product;
    const headers = new HttpHeaders() 
      .set('Authorization', 'Basic ' + btoa('demo:demo')) 
      .set('X-User', 'demo') 
      .set('X-Password', 'demo');
      this.http.post(url, body, { headers }).subscribe((response)=>{ console.log(response); }, (error) => { console.error(error); } );
  }
  deleteproduct(id:string):void{
    const url='http://localhost:30030/products/delete';
    const body={id:id};
    const headers = new HttpHeaders() 
      .set('Authorization', 'Basic ' + btoa('demo:demo')) 
      .set('X-User', 'demo') 
      .set('X-Password', 'demo');
      this.http.post(url, body, { headers }).subscribe( (response) => { console.log(response); }, (error) => { console.error(error); } );
  }
}

