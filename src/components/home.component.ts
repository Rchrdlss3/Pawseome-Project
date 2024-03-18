import { Component, OnInit } from "@angular/core";
import { DogServices } from '../helper/dog.services';
import {AllBreedsModel} from '../models/DogModels';
import { DogPawImageURL } from '../helper/common.helper';
import {MatDialog,MAT_DIALOG_DATA, MatDialogRef,MatDialogTitle,MatDialogContent,MatDialogActions,MatDialogClose,} from '@angular/material/dialog';import { HttpClientModule } from "@angular/common/http";
import {MatCardModule} from '@angular/material/card';
import { NgFor } from '@angular/common';
import { RouterModule } from "@angular/router";

@Component ({
    selector: 'app-root',
    standalone: true,
    imports: [HttpClientModule, RouterModule, MatCardModule, NgFor],
    template: 
    `
    <div className = "dog-app-wrapper">
    <div class = "dog-card-wrapper">
    <mat-card class = "dog-card" *ngFor ="let breed of allBreeds.message">
      <mat-card-header>
        <mat-card-title class = "dog-card-title">
          {{breed}}
        </mat-card-title>
      </mat-card-header>
      <img mat-card-image src = {{dogPawImage}} alt = "Image of {{breed}}"> 
      <mat-card-content>
      </mat-card-content>
    </mat-card>
    </div>
  </div>
    `
})
export class HomeComponent implements OnInit {
    allBreeds: AllBreedsModel = new AllBreedsModel();
    dogPawImage: string = DogPawImageURL;
    dialogImage: string = ''

  
    constructor(private dogServices: DogServices, private dialog: MatDialog) {
  
    }
    setDialogImage(inputImage:string) {
        this.dialogImage = inputImage
    }
    ngOnInit(): void {
      this.dogServices.getAllBreeds().subscribe((res => {
        this.allBreeds = res
      }))
    }
}