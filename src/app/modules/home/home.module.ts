import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../../shared/shared.module";
import { TracksModule } from '@modules/tracks/tracks.module';
import { HistoruModule } from '@modules/history/history.module';
import { FavoritesModule } from '@modules/favorites/favorites.module';
import { HomeRoutingModule } from './home-routing.module';

import { HomePagesComponent } from './pages/home-pages/home-pages.component';



@NgModule({
  declarations: [
    HomePagesComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    TracksModule,
    HistoruModule,
    FavoritesModule,

  ],
  exports: [
    HomeRoutingModule
  ]
})
export class HomeModule { }
