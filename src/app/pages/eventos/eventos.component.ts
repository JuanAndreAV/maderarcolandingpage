import { Component, signal } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { BuyBtnComponent } from '../../shared/buy-btn/buy-btn.component';

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [FormComponent, BuyBtnComponent],
  templateUrl: './eventos.component.html',
 
})
export class EventosComponent {
  visible = signal(false);
  textBtn = signal<string>('Leer más');
toggle(){
  this.visible.update(()=> !this.visible());
  if(this.visible() === true){
    this.textBtn.update(()=> 'Leer menos');
  }else{
    this.textBtn.update(()=>'Leer más')
  }
  console.log(this.visible())
}
}
