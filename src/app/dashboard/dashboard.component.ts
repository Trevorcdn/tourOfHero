import { Component, OnInit } from '@angular/core';
import { Hero } from '../heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    //returns the sliced list of heroes at positions 1 and 5, returning only four of the Top Heroes (2nd, 3rd, 4th, and 5th).
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}

/* Note: dashboard.component.html 
   Has a *ngfor loop that generates links where the subdomain
  is the name of the heroes using
  <a *ngFor="let hero of heroes">
    {{hero.name}}
  </a>
  ex: hostURL.com/Spiderman
      houstURL.com/Superman
      etc.
*/