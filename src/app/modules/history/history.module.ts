import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoruRoutingModule } from './history-routing.module';
import { HistoryPagesComponent } from './pages/history-pages/history-pages.component';
import { HomeRoutingModule } from '@modules/home/home-routing.module';


@NgModule({
  declarations: [
    HistoryPagesComponent
  ],
  imports: [
    CommonModule,
    HistoruRoutingModule,
    HomeRoutingModule,

  ],
  exports: [


  ]
})
export class HistoruModule { }
