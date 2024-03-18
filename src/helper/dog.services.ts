import { HttpClient } from "@angular/common/http";
import { dogServer } from "./common.helper";
import { Injectable } from "@angular/core";
import { AllBreedsModel, RandomImageModel } from "../models/DogModels";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class DogServices {
    constructor (private httpClient:HttpClient) {}

    getDogImages(breed:string) {
        return this.httpClient.get<RandomImageModel>(`${dogServer}breed/${breed}/images/random`)
    }

    getAllBreeds():Observable<AllBreedsModel> {
            return this.httpClient.get<AllBreedsModel>(`${dogServer}breeds/list`);
    }
}