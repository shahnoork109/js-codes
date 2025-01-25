//      {}  <-- this is called scope , it comes with if-else , functions

//the main reason why we dont use var is the below example , we declare c in global scope(outside scope) and also in the inner scope (blog scope),
//global scope variable can be uses in blog scope but , blog scope variable are usable in global scope, in these scenarios var create mistakes

// let a = 2000
// var c = 300

// if (true) {
//     let a = 10
//     const b= 20
//     // var c = 30
//     console.log("INNER: ", a);
    
// }

// console.log(a);
// console.log(b);
// console.log(c);


// function one(){
//     const username = "hitesh"
//     function two(){
//         const website = "youtube"
//         console.log(username);
//     }
//     // console.log(website);

//     two()
    
// }
// one()



// if(true){
//     const username = "hitesh"
//     if (username === "hitesh") {
//         const website = " youtube"
//         console.log(username + website); 
//     }
//     // console.log(website);
// }
// console.log(username);



// intersting question
// there is a diffrence between below two function initialization
//in first one , we can access it before initialise
//in second , we can  nt access it before initialise

console.log(addone(5));
function addone(num){
    return num +1
}


addtwo(5)
const addtwo = function(num){
    return num + 2
}
