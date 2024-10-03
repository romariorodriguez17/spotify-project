import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: 'favorites',
    loadChildren: () => import('../favorites/favorites.module').then(m => m.FavoritesModule)
  },
  {
    path: 'history',
    loadChildren: () => import('../history/history.module').then(m => m.HistoruModule)

  },
  {
    path: 'tracks',
    loadChildren: () => import('../tracks/tracks.module').then(m => m.TracksModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
