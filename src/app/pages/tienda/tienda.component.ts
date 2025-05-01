import { Component, inject, OnInit, signal } from '@angular/core';
import { StoreService } from '../../servicios/store.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tienda',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tienda.component.html',
  styleUrl: './tienda.component.css'
})
export class TiendaComponent implements OnInit {
  storeService = inject(StoreService);
  public products = signal<any>([]);
  public loading = signal<boolean>(false);
  public error = signal<string | null>(null);
  

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
whatsAppMessage(product: any){
  const { id, name, price} = product
  const message =  `Hola, Maderarco. Me gustaria recibir información sobre: ${id} - ${name}, precio: ${price}.`;
  return message
}
  addToCart(product: any) {

    const phoneNumber = '573043284108';
    
    const message = encodeURIComponent(this.whatsAppMessage(product));
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    // 3. Navega a la URL de WhatsApp
    window.open(whatsappUrl, '_blank'); 
  };

  viewProductDetail(productId: string) {
    console.log('Ver detalle del producto:', productId);
    // Aquí implementarías la navegación al detalle del producto
  }


}
