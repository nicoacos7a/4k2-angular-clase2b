import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  mensaje: string;
  materia: 'pav ii';
  verMateria = true;

  constructor() { }

  ngOnInit() {
    this.mensaje = "Hola mundo desde angular con interpolacion";
  }
}