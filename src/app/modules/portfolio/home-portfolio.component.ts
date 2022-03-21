import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home-portfolio',
  templateUrl: './home-portfolio.component.html',
  styleUrls: ['./home-portfolio.component.scss']
})
export class HomePortfolioComponent implements OnInit {
  
  public languageList = [
    {code: 'en', label: 'English'},
    {code: 'es', label: 'Spanish'}
  ];
  
  constructor(private _translate: TranslateService) { }

  ngOnInit(): void {
  }

  public changeLang(code: string){
    this._translate.use(code);
  }
  
}
