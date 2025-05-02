import { CommonModule } from '@angular/common';
import { Component, input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../interfaces/product';

@Component({
  selector: 'product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
 product = input.required<Product>();
 @Output() viewDetail = new EventEmitter<string>(); // Emitimos el ID
 //@Output() addToCartEvent = new EventEmitter<Product>();

 emitViewDetail(productId: string): void {
   this.viewDetail.emit(productId);
 }

 /*addToCart(product: Product): void {
   this.addToCartEvent.emit(product);
 }
}*/

 whatsAppMessage(product: Product){
  const { id, name, price} = product
  const message =  `Hola, Maderarco. Me gustaria recibir información sobre: ${id} - ${name}, precio: ${price}.`;
  return message
};
 addToCart(product: Product) {

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
