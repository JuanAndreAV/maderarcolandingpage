import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { WhatsappBtnComponent } from './shared/whatsapp-btn/whatsapp-btn.component';
import { FooterComponent } from './shared/footer/footer.component';
import { EventsModalComponent } from './modals/events.modal/events.modal.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavBarComponent, WhatsappBtnComponent, FooterComponent, EventsModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'maderarco';
}
