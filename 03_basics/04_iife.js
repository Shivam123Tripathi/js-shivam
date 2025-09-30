// Immediately Invoked Function EXpressions(IIFE)

(function chai(){
    //it is named iife
    console.log(`DB CONNECTED`);
    
})(); //use semi colon always

(  (name) => {
    //unnamed iife
    console.log(`DB CONNECTED TWO ${name}`);
    
}) ("shivam")



//do iife likhne ke liye semi colon use krna pdta h like shown above