import { Component, OnInit } from '@angular/core';
import { Ingreso } from './ingreso.model';
import { IngresoServicio } from './ingreso.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  ingresos: Ingreso[] = [];
  
  constructor(private ingresoServicio: IngresoServicio) {

  }
  ngOnInit(): void {
    this.ingresos = this.ingresoServicio.ingresos;
  }

  // **agregamos metodos

  eliminarRegistro(ingreso: Ingreso) {
    // **llamamos al metodo desde nuestro service
    this.ingresoServicio.eliminar(ingreso);
  }
}
