import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Jugador } from '../../interfaces/jugador.interface';
import { JugadoresService } from '../../services/jugadores.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  jugador: Jugador;
  mostrarErrores = false;
  acepto = false;
  nombreErrors = false;
  cedulaErrors = false;
  correoErrors = false;
  numeroErrors = false;
  aceptoErrors = false;

  constructor(  public jugadorService: JugadoresService ) {
    this.jugador = new Jugador();
  }

  guardar( form: NgForm ) {
    if ( form.form.valid ) {
      this.cleanJugador();
      this.jugadorService.guardarJugador(this.jugador);
    }
  }

  cleanJugador() {
    this.jugador.cedula = this.jugador.cedula.split('.').join('');
    this.jugador.cedula = this.jugador.cedula.split('-').join('');
    this.jugador.cedula = this.jugador.cedula.split(' ').join('');
    this.jugador.cedula = this.jugador.cedula.split(',').join('');
    this.jugador.cedula = this.jugador.cedula.split('/').join('');
    this.jugador.numero = this.jugador.numero.split('.').join('');
    this.jugador.numero = this.jugador.numero.split('-').join('');
    this.jugador.numero = this.jugador.numero.split(' ').join('');
    this.jugador.numero = this.jugador.numero.split(',').join('');
    this.jugador.numero = this.jugador.numero.split('/').join('');
  }

  verificaForm( form: NgForm ) {
    if ( form.form.controls.nombre.errors === null ) {
      this.nombreErrors = false;
      this.mostrarErrores = true;
    } else {
      this.nombreErrors = true;
    }

    if ( form.form.controls.cedula.errors === null ) {
      this.cedulaErrors = false;
      this.mostrarErrores = true;
    } else {
      this.cedulaErrors = true;
    }

    if ( form.form.controls.correo.errors === null ) {
      this.correoErrors = false;
      this.mostrarErrores = true;
    } else {
      this.correoErrors = true;
    }

    if ( form.form.controls.numero.errors === null ) {
      this.numeroErrors = false;
      this.mostrarErrores = true;
    } else {
      this.numeroErrors = true;
    }

    if ( form.form.value.acepto === false ) {
      this.aceptoErrors = true;
      this.mostrarErrores = true;
    } else {
      this.aceptoErrors = false;
    }

  }

}
