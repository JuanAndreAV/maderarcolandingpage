import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor() { }
  instagram: string = "https://www.instagram.com/maderarcoensamble/profilecard/?igsh=bDFvNzczZm5waHR3";
  youtube: string = "https://youtube.com/@maderarcoensamble?si=HnJDcpLT453bvosv";
  tiktok: string = "https://www.tiktok.com/@maderarco24";
  linkedin: string = "https://www.linkedin.com/in/juan-a-a-v/"

  images: any[] = [
    {
      url: "assets/fotosMaderarco/maderarco1.JPEG",
      title: "Imagen 1",
      information: "Descripcion 1"
    },
    {
      url: "assets/fotosMaderarco/maderarco2.JPEG",
      title: "Imagen 2",
      information: "Descripcion 2"
    }
  ]

  
}
