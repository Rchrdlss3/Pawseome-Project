import { Component, OnInit, Input } from '@angular/core';
import { AsyncPipe, NgComponentOutlet, NgFor } from '@angular/common';
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from '@angular/material/button';
import { DogServices } from '../helper/dog.services';
import { startStatusMessage, getSuccessMessage, getErrorMessage } from '../helper/common.helper';


@Component({
    selector: 'app-root',
    standalone: true,
    imports: [NgComponentOutlet, AsyncPipe,MatButtonModule, MatInputModule,MatFormFieldModule, FormsModule, MatFormFieldModule],
    template: `
    <div class = "random-dog-wrapper">
    <input value = {{searchedDog}} type = "text" (change) = getRandomDogImage($event) style="margin:5px">
    <select (change) = getRandomDogImage($event) >
    @for (breed of allBreeds; track breed) {
        <option value = {{breed}}>{{breed}}</option>
    }
    </select>
    <h3>{{status}}</h3>
    <img src = {{givenImage}}> 
    <div>
    `,
})

export class RandomImageComponent implements OnInit {
    @Input() foo : string = ' ';
    @Input() givenImage:string = '';
    @Input() status: string = '';
    @Input() allBreeds: string[] = [];
    searchedDog: string = '';

    constructor(private dogServices: DogServices) {
    
    }

    getRandomDogImage(valEntered:any){
        let returnedString: any;
        const targetValue = valEntered.target.value.toLowerCase()
        this.dogServices.getDogImages(targetValue).subscribe((res=> {
            if (res.status === "success") {
                this.setImageAndStatus(res.message,getSuccessMessage(targetValue)) 
            }
        }
        ),
        err => {
            console.log(err)
            this.setImageAndStatus('https://media.istockphoto.com/id/157382116/photo/pukster-puck.jpg?s=612x612&w=0&k=20&c=YJd5C1sW6hXnew9jssuPPCTNSaVf8GRMoM-JOvYYXC4=',getErrorMessage(targetValue))
        }
        )
    }
    setImageAndStatus(srcProvided: string,status:string){
        this.givenImage = srcProvided
        this.status = status
    }
    ngOnInit () {
        if (this.searchedDog == '') {
            this.setImageAndStatus('https://www.shutterstock.com/image-photo/cute-corgi-dog-looking-laptop-600nw-1715597689.jpg',startStatusMessage)
        }
        this.dogServices.getAllBreeds().subscribe((res => {
              this.allBreeds = res.message
        }))
    }
}