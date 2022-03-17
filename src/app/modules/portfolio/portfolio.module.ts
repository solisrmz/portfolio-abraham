import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { HomePortfolioComponent } from './home-portfolio.component';
import { MaterialModule } from '../../material.module';
import { AboutMeComponent } from './components/about-me/about-me.component';

@NgModule({
  declarations: [
    HomePortfolioComponent,
    AboutMeComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    MaterialModule
  ]
})
export class PortfolioModule { }
