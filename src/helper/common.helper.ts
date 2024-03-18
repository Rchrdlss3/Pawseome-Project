export const dogServer = "https://dog.ceo/api/"

export const DogPawImageURL = "https://rchrdlss3.github.io/DogCeoAPI/images/dogpaw.svg"

export const startStatusMessage = "Let's begin this pawsome search! Start by either searching, or using the drop down"

//These two functions could've been one simple function depending on status given, but due to time I 
// made a separate function for both
export function getSuccessMessage(breed:string):string {
    return `Success! Here's a picture of a(n) ${breed} breed`
}
export function getErrorMessage(breed:string):string {
    return `Sorry! Couldn't find ${breed}`
}
