import { Component } from '@angular/core';

@Component({
  selector: 'app-buy-btn',
  standalone: true,
  imports: [],
  templateUrl: './buy-btn.component.html',
  styleUrl: './buy-btn.component.css'
})
export class BuyBtnComponent {
whatsAppMessage(){
  const message =  'Hola, me gustaría adquirir entrada(s) para el concierto de Maderarco Ensamble!'
  return message
};
 addToCart() {

  const phoneNumber = '573104612628'

  
  const message = encodeURIComponent(this.whatsAppMessage());
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  // 3. Navega a la URL de WhatsApp
  window.open(whatsappUrl, '_blank'); 
};
}
