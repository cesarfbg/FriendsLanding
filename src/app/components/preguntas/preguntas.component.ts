import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent {

  preguntaMostrada = 0;
  preguntas: any[] = [
    [
      'Tu comida favorita es:',
      [
        'Pizza',
        'Sandwich de sobras de pavo de Thanksgiving',
        'Una ensalada',
        'Cualquier cosa que no implique sacrificar animales inocentes',
        'Cualquier cosa que no esté en el menú de Thanksgiving',
        'Cualquier cosa que tú cocinaste',
      ],
      [
        'Joey',
        'Ross',
        'Rachel',
        'Phoebe',
        'Chandler',
        'Monica'
      ],
      [
        false,
        false,
        false,
        false,
        false,
        false
      ]
    ],
    [
      'Las reglas:',
      [
        'Son aburridas',
        'Están bien, pero no hay por qué exagerar con ellas',
        'Son una excusa para oprimir',
        'Sirven para controlar la diversión',
        'Dependen de si estás en un break',
        'Sirven para hacer dinero',
      ],
      [
        'Joey',
        'Rachel',
        'Phoebe',
        'Monica',
        'Ross',
        'Chandler',
      ],
      [
        false,
        false,
        false,
        false,
        false,
        false
      ]
    ],
    [
      'Tus padres:',
      [
        'Te ven como alguien que no sabe tomar sus propias decisiones',
        'Te traumatizaron con su divorcio',
        'Te ponen a competir con tus hermanos',
        'Te prefieren, aunque digan lo contrario',
        'Te enloquecen con su relación, pero parecen saber lo que hacen',
        'Te dejaron al cuidado de alguien más',
      ],
      [
        'Rachel',
        'Chandler',
        'Monica',
        'Ross',
        'Joey',
        'Phoebe',
      ],
      [
        false,
        false,
        false,
        false,
        false,
        false
      ]
    ],
    [
      'Tu statement de estilo es:',
      [
        'Un pantalón de cuero',
        'Ir por la vida “comando” (sin calzoncillos)',
        'El corte de pelo que todas quieren llevar',
        'Un vestido de novia',
        'Algo lindo, comprado en una venta de garaje',
        'Algo que le robaste a tu papá',
      ],
      [
        'Ross',
        'Joey',
        'Rachel',
        'Monica',
        'Phoebe',
        'Chandler',
      ],
      [
        false,
        false,
        false,
        false,
        false,
        false
      ]
    ],
    [
      'Tu mascota ideal:',
      [
        'Un pollo',
        'Un pato',
        'Un perro',
        'Un gato',
        'Un mono',
        'Un cachorrito (pero solo por tres días)',
      ],
      [
        'Chandler',
        'Joey',
        'Monica',
        'Rachel',
        'Ross',
        'Phoebe',
      ],
      [
        false,
        false,
        false,
        false,
        false,
        false
      ]
    ],
    [
      'El baño:',
      [
        'Es un lugar para escribir canciones',
        'Es un lugar para tener sexo',
        'Es un lugar que debería estar separado de la cocina',
        'Es un lugar que se limpia 17 veces',
        'Es un lugar para enterarte de que estás embarazada',
        'Es un lugar para deshacerte de esos pantalones que te están matando',

      ],
      [
        'Phoebe',
        'Joey',
        'Chandler',
        'Monica',
        'Rachel',
        'Ross',
      ],
      [
        false,
        false,
        false,
        false,
        false,
        false
      ]
    ],
    [
      'La cocina:',
      [
        'Es un buen (no, es el mejor) lugar para divertirte',
        'Es un buen lugar para tener sexo',
        'Es un lugar que debería estar separado del baño',
        'Es un buen lugar para estar desnuda',
        'Es un buen lugar para hacer las galletas “francesas” de tu abuela',
        'Es un buen lugar para hacer esconder tus sentimientos y tomar margarita',

      ],
      [
        'Monica',
        'Joey',
        'Chandler',
        'Rachel',
        'Phoebe',
        'Ross',
      ],
      [
        false,
        false,
        false,
        false,
        false,
        false
      ]
    ],
    [
      'Deberías dejar de fumar porque...',
      [
        'Eres una mujer fuerte y segura de tí misma',
        'Sabes que fumar es horrible, pero lo harías para encajar en un grupo',
        'Nunca has fumado, pero has fingido hacerlo',
        'No sabes fumar, pero tu amigo trata de enseñarte por trabajo',
        'No entiendes cómo alguien puede fumar en esta época',
        'Te parece que fumar es espantoso y nadie debería hacerlo',

      ],
      [
        'Chandler',
        'Rachel',
        'Ross',
        'Joey',
        'Monica',
        'Phoebe',
      ],
      [
        false,
        false,
        false,
        false,
        false,
        false
      ]
    ],
    [
      'En tu estado de cuenta aparecen 500 dólares de más. Tú:',
      [
        'Te los quedas',
        'Te vas de shopping',
        'Los devuelves. Quedártelos sería robar',
        'Los devuelves y le reclamas a los del banco por el desorden',
        'Los devuelves. Tienes dinero guardado en secreto',
        'Los devuelves. El dinero nunca ha sido algo que te preocupe',

      ],
      [
        'Joey',
        'Rachel',
        'Phoebe',
        'Monica',
        'Chandler',
        'Ross',
      ],
      [
        false,
        false,
        false,
        false,
        false,
        false
      ]
    ],
    [
      'El chicle es:',
      [
        'La perfección',
        'Innecesario, siempre puedes masticar tu cabello',
        'Un peligro: puede pegarse de algún sitio y ensuciarlo para siempre',
        'Inútil, prefieres los caramelos',
        'Una cosa pegada a tu mesa de patio',
        'Un color de vestido de dama de honor',

      ],
      [
        'Chandler',
        'Phoebe',
        'Monica',
        'Ross',
        'Joey',
        'Rachel',
      ],
      [
        false,
        false,
        false,
        false,
        false,
        false
      ]
    ],
  ];
  unaSeleccionada = false;
  resultado: any = 0;
  Chandler = 0;
  Phoebe = 0;
  Monica = 0;
  Ross = 0;
  Joey = 0;
  Rachel = 0;

  constructor( private router: Router ) {}

  calcularResultado() {
    for (const pregunta of this.preguntas) {
      // tslint:disable-next-line: forin
      for (const i in pregunta[3]) {
        if (pregunta[3][i] === true) {
          if ( pregunta[2][i] === 'Chandler') {
            this.Chandler++;
          } else if ( pregunta[2][i] === 'Phoebe' ) {
            this.Phoebe++;
          } else if ( pregunta[2][i] === 'Monica' ) {
            this.Monica++;
          } else if ( pregunta[2][i] === 'Ross' ) {
            this.Ross++;
          } else if ( pregunta[2][i] === 'Joey' ) {
            this.Joey++;
          } else if ( pregunta[2][i] === 'Rachel' ) {
            this.Rachel++;
          }
        }
      }
    }

    const arrResultados = [this.Chandler, this.Phoebe, this.Monica, this.Ross, this.Joey, this.Rachel];
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < arrResultados.length; i++) {
      if (this.resultado < arrResultados[i]) {
        this.resultado = arrResultados[i];
      }
    }

    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < arrResultados.length; i++) {
      if (this.resultado === arrResultados[i]) {
        if ( i === 0) {
          this.resultado = 'chandler';
          return;
        }
        if ( i === 1) {
          this.resultado = 'phoebe';
          return;
        }
        if ( i === 2) {
          this.resultado = 'monica';
          return;
        }
        if ( i === 3) {
          this.resultado = 'ross';
          return;
        }
        if ( i === 4) {
          this.resultado = 'joey';
          return;
        }
        if ( i === 0) {
          this.resultado = 'rachel';
          return;
        }
      }
    }
  }

  siguientePregunta() {
    if (this.preguntaMostrada === 9) {
      this.calcularResultado();
      this.router.navigate(['resultado', this.resultado]);
      return;
    }
    this.preguntaMostrada++;
    this.unaSeleccionada = false;
  }

  seleccionarPregunta( idx ) {
    for (let i = 0; i < this.preguntas[this.preguntaMostrada][3].length; i++ ) {
      this.preguntas[this.preguntaMostrada][3][i] = false;
    }
    this.preguntas[this.preguntaMostrada][3][idx] = true;
    this.unaSeleccionada = true;
  }

}
