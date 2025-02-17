let score = '33';
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof(valueInNumber));

let scoreNotanumber = '33a';
console.log(typeof(scoreNotanumber ));

let scoreInNumber = Number(scoreNotanumber);
console.log(typeof(scoreInNumber));
console.log(scoreInNumber)  // the value is converted into a number but the value is NAN(not a number)


