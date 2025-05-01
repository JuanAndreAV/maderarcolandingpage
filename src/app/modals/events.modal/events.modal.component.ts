import { Component, inject, signal, Input, Output, EventEmitter } from '@angular/core';
import { InfoService } from '../../servicios/info.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [NgClass],
  templateUrl: './events.modal.component.html',
  styleUrl: './events.modal.component.css'
})
export class EventsModalComponent {
  isOpen = signal(true);
  infoService = inject(InfoService);
  
  @Output() closeModalEvent = new EventEmitter<void>();
  @Input() accordionItems: { title: string; content: string }[] = [];
  expandedPanel: number | null = null;
 

  togleModal() {
    this.isOpen.update(()=>!this.isOpen)
  }

  

  

}
