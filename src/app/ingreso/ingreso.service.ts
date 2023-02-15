import { Ingreso } from "./ingreso.model";

export class IngresoServicio {
    ingresos: Ingreso[] = [
        new Ingreso("Salario", 4000),
        new Ingreso("venta Coche", 500)
    ];

    //metoodo para eliminar registro
    eliminar(ingreso: Ingreso) {
        const indice: number = this.ingresos.indexOf(ingreso);
        // splice: removera el indice y el 1 sera la cantidad de elementos a eliminar
        this.ingresos.splice(indice, 1);
    }
}