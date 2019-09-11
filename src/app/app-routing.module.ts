import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { PreguntasComponent } from './components/preguntas/preguntas.component';
import { ResultadoComponent } from './components/resultado/resultado.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent},
  { path: 'formulario', component: FormularioComponent},
  { path: 'preguntas', component: PreguntasComponent},
  { path: 'resultado/:id', component: ResultadoComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
