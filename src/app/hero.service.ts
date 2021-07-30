import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
 
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }
  
  constructor() { }
}





/* obter dados importantes de qualquer lugar - um serviço da web, 
armazenamento local ou uma fonte de dados simulada. */