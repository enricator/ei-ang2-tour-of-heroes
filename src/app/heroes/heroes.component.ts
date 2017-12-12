import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class HeroesComponent implements OnInit {

  lsHeroes = "toh-heroes";
  heroes = this.getHeroes();
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  // TODO: update localStorage when hero name is changed in input #heroName

  constructor() {  }

  ngOnInit() {  }

  getHeroes() {
    //let lsHeroes = "toh-heroes";
    let heroesJson = JSON.parse(localStorage.getItem(this.lsHeroes));
    if (heroesJson != null) {
      console.log('found localStorage: ' + heroesJson.length + ' heroes');
      return heroesJson;
    } else {
      console.log('no heroes found in localStorage: generating mock heroes');
      localStorage.setItem('toh-heroes',JSON.stringify(HEROES));
      return HEROES;
    }
  }

}
