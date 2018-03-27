import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../domain/hero';
import { HEROES } from '../domain/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

 

  constructor() { }

  hero : Hero = {
    id: 1,
    name: "Homem de Ferro"
  }
 
  heroes: Hero[] = HEROES;
  selectedHero : Hero;
 
  ngOnInit() {
  }

  onSelect(hero : Hero) : void {
    this.selectedHero = hero;
  }
}
