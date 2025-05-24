import { Component, inject, signal, Input, Output, EventEmitter } from '@angular/core';
import { InfoService } from '../../servicios/info.service';
import { BuyBtnComponent } from '../../shared/buy-btn/buy-btn.component';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [BuyBtnComponent],
  templateUrl: './events.modal.component.html',
  
})
export class EventsModalComponent {
  isOpen = signal(false);
  infoService = inject(InfoService);
  
  //@Output() closeModalEvent = new EventEmitter<void>();
  @Input() accordionItems: { title: string; content: string }[] = [];
  expandedPanel: number | null = null;
 

  togleModal() {
    this.isOpen.update(()=>!this.isOpen())
  }

  

  

}
