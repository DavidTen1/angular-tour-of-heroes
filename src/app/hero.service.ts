import { Injectable } from '@angular/core';
import {HEROES} from "../mock-heroes";
import {Hero} from "./hero";
import {Observable, of} from "rxjs";
import {MessageService} from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  // getHeroes(): Hero[]{
  // return HEROES;
  // }
getHeroes():Observable<Hero[]>{
  const heroes = of(HEROES);
  this.messageService.add('fetched HeroService Heroes');
  return heroes;
}
  getHero(id: number){
    const hero = HEROES.find(hero => hero.id === id)!;
    this.messageService.add(`Hero with name ${hero.name} & id ${hero.id} added`);
    return of(hero);
  }

  constructor(private messageService: MessageService) { }
}
