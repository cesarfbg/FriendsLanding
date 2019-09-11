import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  resultado = '';

  constructor( public activatedRoute: ActivatedRoute, public router: Router ) {}

  ngOnInit() {
    this.resultado = this.activatedRoute.snapshot.params.id;
    this.resultado = this.resultado.charAt(0).toUpperCase() + this.resultado.slice(1).toLowerCase();
    console.log(this.resultado);
    // tslint:disable-next-line: max-line-length
    if (this.resultado !== 'Chandler' && this.resultado !== 'Phoebe' && this.resultado !== 'Monica' && this.resultado !== 'Ross' && this.resultado !== 'Joey' && this.resultado !== 'Rachel') {
      this.router.navigate(['inicio']);
    }
  }

  reiniciar() {
    this.router.navigate(['inicio']);
  }

}
