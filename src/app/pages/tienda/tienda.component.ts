import { Component, inject, OnInit, signal } from '@angular/core';
import { StoreService } from '../../servicios/store.service';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
import { Product } from '../../interfaces/product';
import {  Router, RouterModule,  } from '@angular/router';
import { ProductPageComponent } from './product-page/product-page.component';

@Component({
  selector: 'app-tienda',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, ProductPageComponent, RouterModule ],
  templateUrl: './tienda.component.html',
  styleUrl: './tienda.component.css'
})
export class TiendaComponent implements OnInit {
  storeService = inject(StoreService);
  router = inject(Router);

  public products = signal<Product[]>([]);
  public loading = signal<boolean>(false);
  public error = signal<string | null>(null);
  public selectedProductId = signal<string | null>(null);

  

  categories: string[] = ['Instrumentos', 'Equipos', 'Accesorios', 'Partituras'];
  subCategories: string[] = ['Guitarras', 'Baterías', 'Teclados', 'Amplificadores', 'Micrófonos'];

  ngOnInit(): void {
     this.getProducts() 
  }
  getProducts(){
    this.loading.set(true);
    this.error.set(null);

   this.storeService.getProducts()
   .subscribe({
    next: (response)=>{
      this.products.update(()=>response);
      this.loading.set(false)
    },
    error: (err) => {
      console.error('Error del servicio:', err.message);
      this.error.set(err.message);
      this.loading.set(false);
    }
   })
   
  };

 

  navigateToProductDetail(productId: string): void {
    this.router.navigate(['/tienda/product', productId]);
     this.selectedProductId.set(productId); // Guarda el ID del producto seleccionado
    // No necesitamos navegar programáticamente aquí si estamos condicionalmente renderizando
  }

  // Método para volver a mostrar la lista de productos
  volverATienda(): void {
    this.selectedProductId.set(null);
  }
 


}
