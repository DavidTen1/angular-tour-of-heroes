import { Injectable } from '@angular/core';
import {HEROES} from "../mock-heroes";
import {Hero} from "./hero";
import {Observable, of} from "rxjs";
import {MessageService} from "./message.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesURL = 'api/heroes';
  constructor(private messageService: MessageService, private http: HttpClient) { }

  // getHeroes(): Hero[]{
  // return HEROES;
  // }

  private log(message: string){
    this.messageService.add(`Heroservice message ${message}`);
  }


// getHeroes():Observable<Hero[]>{
//   const heroes = of(HEROES);
//   this.messageService.add('fetched HeroService Heroes');
//   return heroes;
// }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesURL)
  }


  getHero(id: number){
    const hero = HEROES.find(hero => hero.id === id)!;
    this.messageService.add(`Hero with name ${hero.name} & id ${hero.id} added`);
    return of(hero);
  }


}
