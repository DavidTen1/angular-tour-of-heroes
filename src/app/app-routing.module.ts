import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HeroesComponent} from "./heroes/heroes.component";
import {HeroDetailComponent} from "./hero-detail/hero-detail.component";

const routes: Routes = [{path: 'heroes', component:HeroesComponent},{path: '', redirectTo:'/dashboard', pathMatch:'full'},
  {path: 'details', component:HeroDetailComponent},
  {path: 'details/:id', component: HeroDetailComponent}];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ], exports: [RouterModule]
})
export class AppRoutingModule { }
