

let a = 300
let b = 20
var c = 30

//this curly braces are called scope not object here because here it comes with any function 

if(true){
    let a = 10
    let b = 20
    console.log("INNER:", a);
    
    //var c = 30 //var is avoided to use
}


console.log(a);
//console.log(b);
//console.log(c);

//scope ke andar ki value bahar nahi jani chahiye
