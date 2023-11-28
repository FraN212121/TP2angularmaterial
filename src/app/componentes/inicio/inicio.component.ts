import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent { 
  /* Arreglo para cada parte de la card, recorriendo uno por uno */
  destacados = [
    { nombre: "Marvel's Spider-Man 2", precio: "US$69.99", plataforma: "PS5", img: '../../../assets/imagenes/spiderman.avif' },
    { nombre: "Hogwarts Legacy", precio: "US$69.99", plataforma: "PS4, PS5", img: "../../../assets/imagenes/hogwarts_juego.webp" },
    { nombre: "EA SPORTS™ FC 24", precio: "US$69.99", plataforma: "PS4, PS5", img: "../../../assets/imagenes/fifa-24-juego.avif" },
    { nombre: "Call of Duty: Modern Warfare III", precio: "US$69.99", plataforma: "PS4, PS5", img: "../../../assets/imagenes/cod_modernwarfare3-juego.avif" },
    { nombre: "Alan Wake 2", precio: "US$59.99", plataforma: "PS5", img: "../../../assets/imagenes/alan_wake_2-juego.avif" },
    { nombre: "God of War Ragnarök", precio: "US$69.99", plataforma: "PS4, PS5", img: "../../../assets/imagenes/gow_ragnarok-juego.webp" },
    { nombre: "Assassin's Creed® Mirage", precio: "US$49.99", plataforma: "PS4, PS5", img: "../../../assets/imagenes/assasssins_creed-juego.webp" },
    { nombre: "Mortal Kombat 1", precio: "US$69.99", plataforma: "PS5", img: "../../../assets/imagenes/mortal_kombat_1-juego.avif" }
  ]
}






