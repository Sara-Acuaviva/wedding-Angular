import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaqComponent } from './components/faq/faq.component';
import { GiftListComponent } from './components/gift-list/gift-list.component';
import { HomeComponent } from './components/home/home.component';
import { TravelComponent } from './components/travel/travel.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "travel",
    component: TravelComponent
  },
  {
    path: "gift",
    component: GiftListComponent
  },
  {
    path: "faq",
    component: FaqComponent
  },
  {
    path: "**",
    redirectTo: "home"
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
