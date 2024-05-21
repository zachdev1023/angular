import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './components/heroes/heroes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { MessagesComponent } from './components/messages/messages.component';
import { AddHeroComponent } from './components/add-hero/add-hero.component';

const routes:Routes = [
  {path:'', redirectTo: '/dashboard', pathMatch: 'full' },
  {path:'dashboard', component: DashboardComponent},
  {path:'heroes', component: HeroesComponent},
  {path:'herodetail/:id', component: HeroDetailComponent},
  {path:'add-hero', component: AddHeroComponent},
  {path:'logs', component: MessagesComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
