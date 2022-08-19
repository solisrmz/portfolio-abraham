import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { HomePortfolioComponent } from './home-portfolio.component';
import { MaterialModule } from '../../material.module';
import { AboutMeComponent } from './components/about-me/about-me.component';
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ExperienceComponent } from './components/experience/experience.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';
import { SharedModule } from '../../shared/shared.module';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    HomePortfolioComponent,
    AboutMeComponent,
    ExperienceComponent,
    TechnologiesComponent
  ],
  imports: [
    CommonModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      defaultLanguage: 'en',
    }),
    PortfolioRoutingModule,
    MaterialModule,
    HttpClientModule,
    SharedModule
  ]
})
export class PortfolioModule { }
