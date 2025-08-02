let score = "43"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score) //capital format
console.log(typeof valueInNumber); //NAN  not a number

// "33" =>33
//"33abc" => NaN
//true =>1; false =>0

let isLoggedIn = "shivam"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

//1 => true
//0 => false
//"" => false
//"shivam" => true

let someNumber = 43
let stringNumber = String(someNumber); //converted 43 into string using String 
console.log(stringNumber);
console.log(typeof stringNumber);

