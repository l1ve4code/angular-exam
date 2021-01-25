import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/pages/home/home.component';
import { ItemsComponent } from '../app/ui/items/items.component';
import { ItemComponent } from '../app/ui/item/item.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "items", component: ItemsComponent},
  {path: "item/:id", component: ItemComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
