import { Component, input, inject, signal, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../interfaces/product';
import { StoreService } from '../../../servicios/store.service';
import { switchMap } from 'rxjs/operators';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent implements OnInit, OnChanges {
/*productDetail = input.required<any>(); //para cuando implemente el back
activatedRoute = inject(ActivatedRoute);

productId: string = this.activatedRoute.snapshot.params['id'];*/
@Input() productId: string | null = null;

private productService = inject(StoreService);
product = signal<Product | undefined>(undefined);
loadingDetail = signal<boolean>(false);
errorDetail = signal<boolean>(false);
private route = inject(ActivatedRoute);

ngOnInit(): void {
  // No necesitamos suscribirnos a los parámetros de la ruta aquí
  /*this.loadingDetail.set(true);
  this.route.params.pipe(
    switchMap(params => this.productService.getProductById(params['id']))
  ).subscribe({
    next: product => {
      this.product.set(product);
      this.loadingDetail.set(false);
    },
    error: error => {
      console.error('Error al cargar el detalle del producto', error);
      this.errorDetail.set(true);
      this.loadingDetail.set(false);
    }
  });*/
}

ngOnChanges(changes: SimpleChanges): void {
  if (changes['productId'] && changes['productId'].currentValue) {
    this.loadProductDetails(changes['productId'].currentValue);
  }
}

loadProductDetails(id: string): void {
  this.loadingDetail.set(true);
  this.productService.getProductById(id).subscribe({
    next: product => {
      this.product.set(product);
      this.loadingDetail.set(false);
    },
    error: error => {
      //console.error('Error al cargar el detalle del producto', error);
      this.errorDetail.set(true);
      this.loadingDetail.set(false);
    }
  });
}
}
