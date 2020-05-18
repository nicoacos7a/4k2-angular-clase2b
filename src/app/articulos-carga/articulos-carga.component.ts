import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormGroup, FormsModule} from '@angular/forms'
import {articulosFamilias} from '../models/articuloFamilia-coleccion'

@Component({
  selector: 'app-articulos-carga',
  templateUrl: './articulos-carga.component.html',
  styleUrls: ['./articulos-carga.component.css']
})
export class ArticulosCargaComponent implements OnInit {

  fg: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.fg = this.fb.group({
      idArticuloFamilia : [''],
      nombre : ['']
    })
  }

  grabar(){
    articulosFamilias.push({
      idArticuloFamilia: Number(this.fg.value.idArticuloFamilia), 
      nombre: this.fg.value.nombre
      })
  }

}