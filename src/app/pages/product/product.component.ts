import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  productList: any [] = [];

  constructor(private http: HttpClient) {
    this.getAllProducts();
  }

  getAllProducts() {
    debugger;
    this.http.get("https://freeapi.gerasim.in/api/BigBasket/GetAllProducts").subscribe((res:any)=>{
      debugger;
      this.productList = res.data;
    })
  }

}
