const user = {
    username: "shivam",
    prince: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`); //this keyword refers to current context
        console.log(this);
        
    }
    
    
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); //here this is empty object o/p will be "{}" only


//browser ke andar ka object is known as window object

// function chai(){
//     let username: "shivam"
//     console.log(this.username);
    
// }
// chai()
// const chai = function (){
//     console.log(this.username);
    
// }

// chai()



//arrowfunction 
// const () addTwo = (num1, num2) => {
//     return num1 + num2
// }


// const addTwo = (num1, num2) => return num1 + num2 //implicit return 

// const  addTwo = (num1, num2) => ( num1 + num2)   //this technique is used in react alot


const  addTwo = (num1, num2) => ({username: "shivam"})
console.log(addTwo(3, 4));


//this also used in loops (impilict return arrow etc

