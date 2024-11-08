import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  whatsAppLink = 573043284108
  encodedMessage: String='';
 

  whatsApp(){
    let whatsApp: string = `https://wa.me/${this.whatsAppLink}?text=${this.encodedMessage}`;
    return whatsApp
  }

user: any = {
  name: '',
  email: '',
  message:  ''
};

 contacForm =  new FormGroup({
  name: new FormControl('',  Validators.required),
  email: new FormControl('',[Validators.required,  Validators.email]),
  message: new  FormControl('', Validators.required),
  
 });

 data(){
  this.user.name =  this.contacForm.value?.name;
  this.user.email =  this.contacForm.value?.email;
  this.user.message = this.contacForm.value?.message
  this.encodedMessage = `Soy, ${this.user.name}. Mensaje:  ${this.user.message}. Mi contacto ${this.user.email}`;
   

  return this.encodedMessage

  };

  invalid(){
    alert('Por favor, completa el formulario correctamente')
  
 }
  
};


