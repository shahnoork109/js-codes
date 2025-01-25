//immediately invoked function expresions (iife)
//global scope ke pollution se bachne ke liye uske variables se bachne ke liye use karte hai
(function chai(){
    console.log("DB connected");
})();      //<-- semicolon is necessary


( (name) =>{
    console.log(`this is arrow function inside the iife ${name}`);
    
})("jitesh");


// below is the syntax of iife
// ()()