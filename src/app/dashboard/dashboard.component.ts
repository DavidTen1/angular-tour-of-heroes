import { Component } from '@angular/core';
import {Hero} from "../hero";
import {HeroService} from "../hero.service";
import {OnInit} from "@angular/core";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  heroes: Hero [] = [];

  ngOnInit() {
    this.getHeroes();
  }
  getHeroes(){
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes.slice(1,3));
  }

  constructor(private heroService: HeroService) {
  }

}
