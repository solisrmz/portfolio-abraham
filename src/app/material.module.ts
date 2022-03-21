import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTabsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    MatTabsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class MaterialModule { }
