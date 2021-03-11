/* Write a function that expects 3 arguments when called

The first two arguments should be numbers
The third argument should be a string
If the value of the third argument is ‘multiply’
Your function should return the multiplication of the first two arguments
If the value of the third argument is ‘divide
Your function should return the value of the first argument divided by the second argument
If the value of the third argument is ‘sum’
Your function should return the sum of the first two arguments
*/

function parcelTracker (firstParcel, secondParcel, parcelName) {
    if (parcelName=='multiply') {
        return firstParcel * secondParcel;
    }
    if (parcelName=='divide') {
        return firstParcel/secondParcel;
    }
    if (parcelName=='sum') {
        return firstParcel + secondParcel;
    }
}
console.log (parcelTracker(12,15,'sum'));
console.log (parcelTracker(12,15,'divide'));
console.log (parcelTracker(12,15,'multiply'));



/* Write a Conditionals Logic*/
const paintColor ="red";
const carColor ="violet";
let theColorsDoesNotMatch;

if (paintColor === carColor) {
    theColorsDoesNotMatch =true;
    console.log(theColorsDoesNotMatch);
} else {
    theColorsMatch = false
    console.log(theColorsMatch)
}
