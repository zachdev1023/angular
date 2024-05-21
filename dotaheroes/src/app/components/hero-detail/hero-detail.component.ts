import { Component, OnInit, Input } from '@angular/core';
import { Hero } from 'src/app/interface/hero'; 
import { ActivatedRoute } from '@angular/router';
import { DatePipe, Location } from '@angular/common';
import { HeroService } from 'src/app/services/hero.service';
import { MessageService } from 'src/app/services/message.service';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() selectedHero?: Hero;
  hero!: Hero;

  constructor(
    private route:ActivatedRoute,
    private location:Location,
    private heroService:HeroService,
    private messageService:MessageService,
    private datePipe:DatePipe
  ) { }

  logDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss');

  ngOnInit(): void {
    this.getHero();
  }

  getHero():void{
    const id = Number (this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

  goBack():void {
    this.location.back();
  }

  updateName(): void {
    if (this.hero) {
      this.heroService.updateName(this.hero)
        .subscribe(() => this.goBack())
    }
  }

}
