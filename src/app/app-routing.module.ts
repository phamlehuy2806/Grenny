import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: 'play', loadChildren: () => import('./pages/play/play.module').then(m => m.PlayModule) }, { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) }, { path: 'list-music', loadChildren: () => import('./pages/list-music/list-music.module').then(m => m.ListMusicModule) }, { path: 'premium', loadChildren: () => import('./pages/premium/premium.module').then(m => m.PremiumModule) }, { path: 'main-page', loadChildren: () => import('./pages/main-page/main-page.module').then(m => m.MainPageModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
