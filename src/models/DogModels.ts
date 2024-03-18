// While testing certain cases, if provided with a 404 error
// the object returned also provides parameter 'code, so we make it nullable 

export class AllBreedsModel {
    message: string[] = [''];
    status: string = '';
    code?: number;
}

export class RandomImageModel {
    message: string = '';
    status: string = '';
    code?:number;
}