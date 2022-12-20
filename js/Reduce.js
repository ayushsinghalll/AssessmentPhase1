const numbers = [175, 50, 25];

const sum = numbers.reduce((a, b) => a + b, 0) ;

const sub = numbers.reduce((a, b) => a - b) ;

const average = numbers.reduce((a, b) => a + b, 0) / numbers.length;


console.log("Sum of all Numbers ",sum);
console.log("Sub of all Numbers ",sub);
console.log("Average of all Numbers",average);


