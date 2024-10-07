import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GameComponent } from './components/game/game.component';
import { DriversComponent } from './components/drivers/drivers.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'games', component: GameComponent },
  { path: 'drivers', component: DriversComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
