import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../domain/hero';

@Component({
  selector: 'app-heroes-datail',
  templateUrl: './heroes-datail.component.html',
  styleUrls: ['./heroes-datail.component.css']
})
export class HeroesDatailComponent implements OnInit {
  @Input() hero : Hero;
  constructor() { }

  ngOnInit() {
  }

}
