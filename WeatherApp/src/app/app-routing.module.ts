import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherCardComponent } from './cards/weather-card/weather-card.component';
import { AddCardComponent } from './cards/add-card/add-card.component';
import { CardListComponent } from './cards/card-list/card-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/cards', pathMatch: 'full'},
   { path: 'cards', component: CardListComponent} 
  //     {path: 'new', component: AddCardComponent},
      // {path: ':id', component: DocumentDetailComponent},
      // {path: ':id/edit', component: DocumentEditComponent}
  // ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
