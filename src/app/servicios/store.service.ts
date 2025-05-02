import { inject, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product';
import { map } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService  {
private http = inject(HttpClient);
private url = 'assets/products.json'
  constructor() {
    
   }

   getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.url); 
   };

   //para cuando implemente el back
  /* getProductById(id: string):Observable<Product> {
    return this.http.get<Product>(`${this.url}/products/${id}`);
   }*/

    getProductById(id: string): Observable<Product | undefined> {
      return this.getProducts().pipe(map(products => products.find(product => product.id === id))
      );
    }
}
