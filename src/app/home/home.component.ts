import { Component } from '@angular/core';
import { FormComponent } from '../pages/form/form.component';
import { NgClass } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgClass,FormComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  images=[
      'assets/fotosMaderarco/maderarco1.JPEG',
      'assets/fotosMaderarco/maderarco2.JPEG',
      'assets/fotosMaderarco/maderarco3.JPEG',
      'assets/fotosMaderarco/maderarco4.JPEG',
  ];
  currentIndex = 0;
  img : any = this.images[this.currentIndex];
  next(){
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    
    this.img = this.images[this.currentIndex];
  };
  prev(){
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    
    this.img = this.images[this.currentIndex];
  };
  changeSlide(index: any) {
    this.currentIndex = index;
    this.img = this.images[this.currentIndex];
    
  }
}
