// singleton -> when created in constructor then it is singleton

const { jsx } = require("react/jsx-runtime")

//object literals


const mySym = Symbol("key1")
const  JsUser = {
    name: "Shivam",
    "fullname" : "shivam tripathi",
    [mySym]:"mykey1",
    age: 12,
    location: "Indore",
    email:"shivam@google.com",
    isLoggedIn :false,
    lastLogInDays:["Monday", "Saturday"]
} //these curly brackets are  object

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// //should know both ways

// console.log(JsUser[mySym]);


JsUser.email = "shivamgpt.com"
// Object.freeze(JsUser)
JsUser.email = "shivammicrosoft.com"
// console.log(JsUser);



//functions can be treated as variable

JsUser.greeting = function(){
    console.log(`Hello js user`);

}
console.log(JsUser.greeting);

JsUser.greeting2 = function(){
    console.log(`hello js user,${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());

