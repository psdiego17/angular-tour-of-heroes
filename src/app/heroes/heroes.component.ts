import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';//Fazendo o import do hero.ts
//import { HEROES } from '../mock-heroes'; //Fazendo o import do mock-heroes.ts que está atuando como um banco de dados
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

/*Sempre exporta classe de componente para que você possa em import outro lugar ... 
como no AppModule. */

export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
}