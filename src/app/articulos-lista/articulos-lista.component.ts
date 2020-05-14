import { Component, OnInit } from '@angular/core';
import {ArticuloFamilia} from '../models/articuloFamilia';
import {articulosFamilias} from '../models/articuloFamilia-coleccion';

@Component({
  selector: 'app-articulos-lista',
  templateUrl: './articulos-lista.component.html',
  styleUrls: ['./articulos-lista.component.css']
})

export class ArticulosListaComponent implements OnInit {
  
  listaArticulos: ArticuloFamilia[];
  verGrilla = false;

  constructor() {}

  ngOnInit(): void {
    this.listaArticulos = articulosFamilias;
  }

  mostrarGrilla(){
    this.verGrilla = true;
  }
}