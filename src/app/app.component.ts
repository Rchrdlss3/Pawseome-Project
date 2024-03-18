import { Component, OnInit, SimpleChanges,OnChanges } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { RouterOutlet, Routes, RouterModule } from '@angular/router';
import { NgComponentOutlet, AsyncPipe } from "@angular/common";
import {MatCardModule} from '@angular/material/card';
import { NgFor } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule, RouterModule, MatCardModule, NgFor, MatButtonModule, MatInputModule,MatFormFieldModule, FormsModule],
  template: 
  `
  <h1 class = "title-header">{{page}}</h1>
  <div class = "navigation-wrapper">
  <router-outlet>
  <a *ngFor = "let route of routingArray" routerLink = {{route.route}} style = "
  margin:5px; color: inherit; text-decoration: none; font-weight: 700;
  "
  class = "router-link"
  >{{route.name}}</a>
  </router-outlet>
  </div>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent  {
  page:string = 'Pawsome Project';
  routingArray = [
    {route:'',name:'Home'},
    {route:'/random',name:'Random Images'}
  ]
}
