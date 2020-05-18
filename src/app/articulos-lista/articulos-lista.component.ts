import { Component, OnInit } from '@angular/core';
import {ArticuloFamilia} from '../models/articuloFamilia';
import {articulosFamilias} from '../models/articuloFamilia-coleccion';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-articulos-lista',
  templateUrl: './articulos-lista.component.html',
  styleUrls: ['./articulos-lista.component.css']
})

export class ArticulosListaComponent implements OnInit {
  
  listaArticulos: ArticuloFamilia[];
  verGrilla = false;
  msjBoton = 'Mostrar Grilla';
  id: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.listaArticulos = articulosFamilias;
    this.id = this.route.snapshot.paramMap.get("id");
  }

  mostrarOcultarGrilla(){
    this.msjBoton = this.verGrilla?'Mostrar Grilla':'Ocultar';
    this.verGrilla = !this.verGrilla;
  }
}