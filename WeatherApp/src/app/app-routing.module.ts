import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherCardComponent } from './cards/weather-card/weather-card.component';
import { AddCardComponent } from './cards/add-card/add-card.component';

const routes: Routes = [
  { path: '', redirectTo: '/cards', pathMatch: 'full'},
  { path: 'cards', component: WeatherCardComponent, children: [
      {path: 'new', component: AddCardComponent},
      // {path: ':id', component: DocumentDetailComponent},
      // {path: ':id/edit', component: DocumentEditComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
