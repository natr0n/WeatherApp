import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardListComponent } from './cards/card-list/card-list.component';
import { CardEditComponent } from './cards/card-edit/card-edit.component';
import { CardDetailComponent } from './cards/card-detail/card-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/cards', pathMatch: 'full'},
   { path: 'cards', component: CardListComponent},
      {path: 'new', component: CardEditComponent},
      {path: ':id', component: CardDetailComponent},
      {path: ':id/edit', component: CardEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
