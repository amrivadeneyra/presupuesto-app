import { Egreso } from "./egreso.model";

export class EgresoServicio {
    egresos: Egreso[] = [
        new Egreso("Renta  Depto", 900),
        new Egreso("Ropa", 200)
    ];
    eliminar(egreso: Egreso) {
        const indice: number = this.egresos.indexOf(egreso);
        // splice: removera el indice y el 1 sera la cantidad de elementos a eliminar
        this.egresos.splice(indice, 1);
    }
}