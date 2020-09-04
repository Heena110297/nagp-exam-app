import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = `api/products`;

  constructor(private http: HttpClient) { }

  getProduct(id: number){
    return this.http.get<Product>(this.url + `/` + id);
  }

  getAllProducts(){
    return this.http.get<Product[]>(this.url);
  }
}
