import { inject, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StoreService  {
private http = inject(HttpClient);
private url = 'assets/products.json'
  constructor() {
    
   }

   getProducts(){
    return this.http.get<any[]>(this.url); 
   }
}
