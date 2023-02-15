import { Component } from '@angular/core';
import { IngresoServicio } from '../ingreso/ingreso.service';
import { EgresoServicio } from '../egreso/egreso.service';
import { Ingreso } from '../ingreso/ingreso.model';
import { Egreso } from '../egreso/egreso.model';
import { MessageService } from '../service/message.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  tipo: string = "ingresoOperacion"
  descripcionInput!: string;
  valorInput!: number;

  //**Inyectar referencia de cada uno de los servicios */
  constructor(private ingresoServicio: IngresoServicio, private egresoServicio: EgresoServicio, private messageError: MessageService) { }

  // **evento click
  tipoOperacion(evento: any) {
    this.tipo = evento.target.value;
  }

  // **Métodos
  agregarValor() {
    if (this.valorInput === undefined || this.descripcionInput === undefined) {

      this.messageError.messageFieldVoid()

    } else if (this.tipo == "ingresoOperacion") {
      this.ingresoServicio.ingresos.push(new Ingreso(this.descripcionInput, this.valorInput));
      console.log("Se agrego ingreso");

    } else if (this.tipo === "egresoOperacion") {
      this.egresoServicio.egresos.push((new Egreso(this.descripcionInput, this.valorInput)))
      console.log("Se agrego egreso");
    }
  }
}
