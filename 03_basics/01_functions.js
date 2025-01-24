// function sayMyName() {
//     console.log("H");
//     console.log("I");
//     console.log("T");
//     console.log("E");
//     console.log("S");  
// }
// sayMyName()

// function addTwoNum (num1, num2) {
//     console.log(num1 + num2);  
// }

// function addTwoNum (num1, num2) {
    // let sum = num1 + num2
    // return sum
    // return num1 + num2
// }
// addTwoNum(4,5)
// const result = addTwoNum(3,5)
// console.log("result: " , result);

// function loginUserMsg(username) {
//     if (!username) {
//         console.log("please enter a valid username");
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMsg());



//using spread operator
// function calculateCartPrice(...num1){
// function calculateCartPrice( val1, val2, ...num1){
//     return num1
// }
// console.log(calculateCartPrice(200,300,500,600,800));



const user = {
    name: "hitesh",
    age: 22
}
function handleObj(anyObject){
    console.log(`this is ${anyObject.name} and age is ${anyObject.age}`);
}

handleObj(user)
