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
  msjBoton = 'Mostrar Grilla';

  constructor() {}

  ngOnInit(): void {
    this.listaArticulos = articulosFamilias;
  }

  mostrarOcultarGrilla(){
    this.msjBoton = this.verGrilla?'Mostrar Grilla':'Ocultar';
    this.verGrilla = !this.verGrilla;
  }
}