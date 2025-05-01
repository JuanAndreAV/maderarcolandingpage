import { Component, inject } from '@angular/core';
import { InfoService } from '../../servicios/info.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  infoMaderarco = inject(InfoService);
  year =  new Date().getFullYear().toString()

  
  
}
