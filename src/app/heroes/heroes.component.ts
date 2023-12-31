import { Component, OnInit } from '@angular/core';
import {Hero} from "../hero";
import {HEROES} from "../../mock-heroes";
import {HeroService} from "../hero.service";
import {MessageService} from "../message.service";


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit{
  heroes: Hero[] = [];
  selectedHero?: Hero | undefined;

  ngOnInit(){
    this.getHeroes();
  }

  getHeroes(){
   this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
   this.messageService.add(`Hero ${this.selectedHero?.name} with id ${this.selectedHero?.id} chosen`);
  }

  constructor(private heroService: HeroService, private messageService: MessageService) {
  }


}
