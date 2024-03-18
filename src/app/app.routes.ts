import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RandomImageComponent } from '../components/randomImage.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from '../components/home.component';


export const routes: Routes = [
    {path: '', component: HomeComponent, title: 'Home'},
    {path: 'random', component: RandomImageComponent}
  ]

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
  })

export class AppRoutesModule {}