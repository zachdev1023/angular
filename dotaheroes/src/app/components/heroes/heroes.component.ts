import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/interface/hero';
import { HEROES } from 'src/app/mock-data/heroes';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Heroes = HEROES;
  selectedHero:any;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
