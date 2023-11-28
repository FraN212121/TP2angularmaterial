import { Component } from '@angular/core';

export interface Consolas {
  nombre: string;
  numero: number;
  precio: number;
  plataforma: string;
}


@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})






export class ServiciosComponent {
  displayedColumns: string[] = ['numero', 'nombre', 'precio', 'plataforma'];
  consolasTabla = consolas;
}

const consolas: Consolas[] = [
  {numero: 1, nombre: 'PlayStation 5', precio: 549.99, plataforma: 'PS5'},
  {numero: 3, nombre: 'PlayStation 5 Edicion Digital', precio: 449.99, plataforma: 'PS5'},
  {numero: 2, nombre: 'PlayStation 5 Spider-Man Edition', precio: 699.99, plataforma: 'PS5'},
  {numero: 4, nombre: 'PlayStation 4', precio: 299.99, plataforma: 'PS4'},
  {numero: 5, nombre: 'PlayStation 4 Slim', precio: 274.99, plataforma: 'PS4'},
  {numero: 6, nombre: 'PlayStation 4 Pro', precio: 349.99, plataforma: 'PS4'},
  {numero: 7, nombre: 'PlayStation 4 Pro Death Stranding Edition', precio: 449.99, plataforma: 'PS4'},
  {numero: 8, nombre: 'PlayStation 4 Pro The Last Of Us Part 2 Edition', precio: 449.99, plataforma: 'PS4'},
  {numero: 9, nombre: 'PlayStation 4 Pro Blue Edition', precio: 449.99, plataforma: 'PS4'},
];

