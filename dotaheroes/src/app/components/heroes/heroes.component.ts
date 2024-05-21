import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/interface/hero';
import { HeroService } from 'src/app/services/hero.service';
import { MessageService } from 'src/app/services/message.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {

  constructor(
    private heroService:HeroService,
    private messageService:MessageService
  ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  Heroes : Hero[] = [];
  selectedHero:any;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes():void {
    this.heroService.getHeroes('heroes')
      .subscribe(heroes => this.Heroes = heroes);
  }

}
