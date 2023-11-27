import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  mostrar1 = false;
  consolas = [
    { nombre: "PlayStation 5", precio: "US$550", img: '../../../assets/imagenes/ps5 fisica.jpg' },
    { nombre: "PlayStation 5 Edicion Digital", precio: "US$450", img: '../../../assets/imagenes/ps5 digital edition.jpg' },
    { nombre: "PlayStation 5 Spider-Man Edition", precio: "US$700", img: '../../../assets/imagenes/ps5 spiderman edition.jpg' },
    { nombre: "PlayStation 4", precio: "US$300", img: '../../../assets/imagenes/ps4 nomral.webp' },
    { nombre: "PlayStation 4 Slim", precio: "US$275", img: '../../../assets/imagenes/ps4 slim.webp' },
    { nombre: "PlayStation 4 Pro", precio: "US$325", img: '../../../assets/imagenes/ps4 pro.webp' }
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