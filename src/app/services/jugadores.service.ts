import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Jugador } from '../interfaces/jugador.interface';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class JugadoresService {

  constructor( public http: HttpClient, private router: Router ) {}

  guardarJugador( jugador: Jugador ) {
    this.http.get(`https://friends-landing.firebaseio.com/${jugador.cedula}.json`)
      .subscribe( res => {
        if (res === null) {
          this.http.put(`https://friends-landing.firebaseio.com/${jugador.cedula}.json`, jugador)
            .subscribe( res2 => {
              // tslint:disable-next-line: no-string-literal
                Swal.fire({
                  type: 'success',
                  title: 'Registro exitoso!',
                  showConfirmButton: false,
                  timer: 1500
                });
                this.router.navigate(['preguntas']);
            }, err => {
              console.log(err);
            });
        } else {
          Swal.fire({
            type: 'success',
            title: 'Ya te habías registrado!',
            showConfirmButton: false,
            timer: 1500
          });
          this.router.navigate(['preguntas']);
        }
      });
  }
}
