/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let`s now
implement the same functionality with object and methods.

1. For each of them, create an object with properties for their full name, mass, and height.
2. Then, addd a method to each object to calculate the BMI. Save the BMI to the object and also return it 
from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and  the respective BMI.
Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / ( height * height ) (mass in kg and height in meter).
*/

var john = {
    name: 'John',
    mass: 95,
    heigth: 1.86,
    calcBMI: function() {
        this.bmi = this.mass / (this.heigth * this.heigth);
        return this.bmi;
    },
}
var mark = {
    name: 'Mark',
    mass: 80,
    heigth: 1.70,
    calcBMI: function() {
        this.bmi = this.mass / (this.heigth * this.heigth);
        return this.bmi;
    },
}

console.log(john.calcBMI());
console.log(mark.calcBMI());

if (john.calcBMI() > mark.calcBMI()) {
    console.log(`El BMI de ${john.name} es ${john.bmi} y es mayor al BMI de ${mark.name} ${mark.bmi}`);
} else {
    console.log(`El BMI de ${mark.name} es ${mark.bmi} y es mayor al BMI de ${john.name} ${john.bmi}`);
}

// var higherMarkBMI = mark.markBMI > john.johnBMI;
// console.log(`Is Mark's BMI higher than John's ? ${higherMarkBMI}`);