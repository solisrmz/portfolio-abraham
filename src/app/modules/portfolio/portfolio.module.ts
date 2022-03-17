import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { HomePortfolioComponent } from './home-portfolio.component';
import { MaterialModule } from '../../material.module';

@NgModule({
  declarations: [
    HomePortfolioComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    MaterialModule
  ]
})
export class PortfolioModule { }
