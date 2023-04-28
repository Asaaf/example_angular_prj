import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { MainComponent } from './components/main/main.component';
import { AboutComponent } from './components/about/about.component';
import { CoverComponent } from './components/cover/cover.component';
import { MenuComponent } from './components/menu/menu.component';


@NgModule({
  declarations: [
    MainComponent,
    AboutComponent,
    CoverComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
  ]
})
export class LandingModule { }
