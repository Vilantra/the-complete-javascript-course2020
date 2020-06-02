/*
John and Mike both palay basketball in different teams. In the lastest 3 games, John's team scored 89, 120 and 103 points
while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average ( highest average score), and print the winner to the console. Also include
the average score n the output.
3. Then change the scores to show different winners. Don't forget to take into account theere might be a draw ( the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the
console. HINT: You  wll need the && operator to take the decision. If yoy can't solve this one, just watch the solution, it's no
problem :)
5. Like before, change the scores to generate different winners, keemping in mind the might be draws.

*/

var scoreJohn = (89 + 120 + 103) / 3;
var scoreMike = (116 + 94 + 123) / 3;
var scoreMary = (97 + 134 + 105) / 3;

if (scoreJohn > scoreMike) {
    console.log(`El team de John es ganador con ${scoreJohn} puntos`);
} else if (scoreMike > scoreJohn) {
    console.log(`El team de Mike es ganador con ${scoreMike} puntos`)
} else {
    console.log(`hay un empate con ${scoreJohn} puntos del team de John y ${scoreMike} puntos del team de Mike`)
}

if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
    console.log(`El team de John es ganador con ${scoreJohn} puntos`);
} else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
    console.log(`El team de Mike es ganador con ${scoreMike} puntos`)
} else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
    console.log(`El team de Mary es ganador con ${scoreMary} puntos`)
} else {
    console.log(`hay un empate`)
}