import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TravelComponent } from './components/travel/travel.component';
import { FaqComponent } from './components/faq/faq.component';
import { GiftListComponent } from './components/gift-list/gift-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TravelComponent,
    FaqComponent,
    GiftListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
