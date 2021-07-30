import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';

/*onfigura suas rotas. As rotas informam ao roteador qual visualização exibir quando 
um usuário clica em um link ou cola uma URL na barra de endereço do navegador. 
path: uma string que corresponde ao URL na barra de endereço do navegador.
component: o componente que o roteador deve criar ao navegar para esta rota.
*/
const routes: Routes = [
  { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }