import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';//Fazendo o import do hero.ts

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

/*Sempre exporta classe de componente para que você possa em import outro lugar ... 
como no AppModule. */

export class HeroesComponent implements OnInit {
  
  /*Refatorando a hero propriedade do componente para ser do tipo Hero. 
  Inicializando com um id de 1 e o nome Windstorm. */
  hero: Hero = { //Criação do objeto hero do tipo Hero que é uma interface
    id: 1,
    name: 'Windstorm'
  }
  
  constructor() { }

  /*O ngOnInit()é um gancho de ciclo de vida . 
  Chamadas angulares ngOnInit()logo após a criação de um componente. 
  É um bom lugar para colocar a lógica de inicialização.*/
  ngOnInit(): void {
  }

}
