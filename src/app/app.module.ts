import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { CabeceroComponent } from './cabecero/cabecero.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { EgresoComponent } from './egreso/egreso.component';
import { EgresoServicio } from './egreso/egreso.service';
import { IngresoServicio } from './ingreso/ingreso.service';
import { FormsModule } from '@angular/forms';
import { MessageService } from './service/message.service';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    CabeceroComponent,
    IngresoComponent,
    EgresoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [IngresoServicio, EgresoServicio, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
