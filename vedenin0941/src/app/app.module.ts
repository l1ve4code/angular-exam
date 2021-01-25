import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './ui/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ItemsComponent } from './ui/items/items.component';
import { ItemComponent } from './ui/item/item.component';
import { CategoryPipe } from './filter/category.pipe';
import { AvailablePipe } from './filter/available.pipe';
import { CostPipe } from './filter/cost.pipe';
import { AmountPipe } from './filter/amount.pipe';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './ui/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ItemsComponent,
    ItemComponent,
    CategoryPipe,
    AvailablePipe,
    CostPipe,
    AmountPipe,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
