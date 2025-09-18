
let a = 300
let b = 20
var c = 30

//this curly braces are called scope not object here because here it comes with any function 

if(true){
    let a = 10
    let b = 20
    //console.log("INNER:", a);
    
    //var c = 30 //var is avoided to use
}


//console.log(a);
//console.log(b);
//console.log(c);

//scope ke andar ki value bahar nahi jani chahiye


//nested scope
function one (){
    const username = "shivam"

    function two(){
    const website = "github"
   // console.log(username);
    
}
//console.log(website);
two()
}
one()

//uppar two jo h one se maang skta h par one bada h or two chhota h to one apne chhote se ni maang sakta :p


if (true) {
    const username = "shivam"
    if (username == "shivam") {
        const website = "github"
        //console.log(username + website);
        
        
    }
   // console.log(website);
    
}
//console.log(username);



//+++++++++++++++++++++ interesting +++++++++++++++++

function addone(num){
    return num + 1
}
addone(5)

const addTwo = function(num){
    return num + 2
}
addTwo(5)

//dono tarah se function bn sakte h dono use hote h 