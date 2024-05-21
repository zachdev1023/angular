import { Component, Input, OnInit } from '@angular/core';
import { HeroService } from 'src/app/services/hero.service';
import { Hero } from 'src/app/interface/hero';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes:any[] = []
  selectedHero:any;

  constructor(
    private heroService:HeroService, 
    private messageService:MessageService

  ) { }

  ngOnInit(): void {
    this.getHeroes()
  }

  getHeroes() {
    this.heroService.getHeroes('dashboard').subscribe(heroes => this.heroes = heroes.slice(0, 5))
  }

}
