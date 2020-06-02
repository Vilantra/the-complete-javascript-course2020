/* Coding Challenge 1


Mark and John are trying to compare ther BMI (Body Mass Index), which is calculated
using the formula : BMI = mass / heigth^2 = mass / (heigth * heigth) ( mass in kg and
heigth in meter).

1. Store Mark's and John's mass and heigth in variables
2. Calculate both theris BMIs
3. Create a bolean variable containning information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's
BMI higher than John's? true").
*/

var massMark = 80;
var heigthMark = 1.70;

var massJohn = 95;
var heigthJohn = 1.86;

var johnBMI = massJohn / (heigthJohn * heigthJohn);
var markBMI = massMark / (heigthMark * heigthMark);

var higherMarkBMI = markBMI > johnBMI;
console.log(`Is Mark's BMI higher than John's ? ${higherMarkBMI}` );


