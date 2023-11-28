import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  mostrar1 = false;
  consolas = [
    { nombre: "PlayStation 5", precio: "US$549.99", img: '../../../assets/imagenes/ps5 fisica.jpg' },
    { nombre: "PlayStation 5 Edicion Digital", precio: "US$449.99", img: '../../../assets/imagenes/ps5 digital edition.jpg' },
    { nombre: "PlayStation 5 Spider-Man Edition", precio: "US$699.99", img: '../../../assets/imagenes/ps5 spiderman edition.jpg' },
    { nombre: "PlayStation 4", precio: "US$299.99", img: '../../../assets/imagenes/ps4 nomral.webp' },
    { nombre: "PlayStation 4 Slim", precio: "US$274.99", img: '../../../assets/imagenes/ps4 slim.webp' },
    { nombre: "PlayStation 4 Pro", precio: "US$324.99", img: '../../../assets/imagenes/ps4 pro NUEVA.jpg' }
  ]

  mostrar2 = false;
  accesorios = [
    { nombre: "Control inalámbrico DualSense®", precio: "US$69.99", img: '../../../assets/imagenes/mando ps5.webp' },
    { nombre: "Control inalámbrico DualSense Edge™", precio: "US$199.99", img: '../../../assets/imagenes/mando chetado ps5.webp' },
    { nombre: "Control inalámbrico DUALSHOCK 4", precio: "US$59.99", img: '../../../assets/imagenes/mando ps4.webp' },
    {
      nombre: "Auriculares inalámbricos PULSE 3D™", precio: "US$99.99", img: '../../../assets/imagenes/auriculares ps5.webp'
    },
    { nombre: "Cámara HD de PS5", precio: "US$69.99", img: '../../../assets/imagenes/camara ps5.webp' },
    { nombre: "PlayStation VR2", precio: "US$499.99", img: '../../../assets/imagenes/ps cr2.jpg' }
  ]
  mostrar3 = false;
  juegos = [
    { nombre: "DEATH STRANDING DIRECTOR'S CUT", precio: "US$59.99", plataforma: "PS5", img: '../../../assets/imagenes/death stranding.webp' },
    { nombre: "Gran Turismo 7", precio: "US$69.99", plataforma: "PS4, PS5", img: "../../../assets/imagenes/gran turismo 7.webp" },
    { nombre: "Ghost of Tsushima Director's Cut", precio: "US$69.99", plataforma: "PS4, PS5", img: "../../../assets/imagenes/ghost of tsushima.jpg" },
    { nombre: "Horizon Forbidden West", precio: "US$49.99", plataforma: "PS4, PS5", img: "../../../assets/imagenes/horizon forbidden westr.webp" },
    { nombre: "Marvel's Spider-Man: Miles Morales", precio: "US$49.99", plataforma: "PS4 PS5", img: "../../../assets/imagenes/spiderman miles morales.webp" },
    { nombre: "The Last of Us™ Part I", precio: "US$69.99", plataforma: "PS5", img: "../../../assets/imagenes/the last of us part 1.webp" },
  ]
}


/* consolas[
  { nombre: "PlayStation 5", precio: "US$550", img: '../../../assets/imagenes/ps5 fisica.jpg' },
  { nombre: "PlayStation 5 Edicion Digital", precio: "US$450", img: '../../../assets/imagenes/ps5 digital edition.jpg' },
  { nombre: "PlayStation 5 Spider-Man Edition", precio: "US$700", img: '../../../assets/imagenes/ps5 spiderman edition.jpg' },
  { nombre: "PlayStation 4", precio: "US$300", img: '../../../assets/imagenes/ps4 nomral.webp' },
  { nombre: "PlayStation 4 Slim", precio: "US$275", img: '../../../assets/imagenes/ps4 slim.webp' },
  { nombre: "PlayStation 4 Pro", precio: "US$325", img: '../../../assets/imagenes/ps4 pro.webp' },
] */