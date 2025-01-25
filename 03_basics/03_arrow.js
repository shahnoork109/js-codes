const user = {
    username : "hitesh",
    price : 999,

    //when we refer to the current context things we use this keyword
    welcomemsg : function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}

// user.welcomemsg()
// user.username = "sam"
// user.welcomemsg()

// console.log(this);      //this gives {} and for browser "window" is global object
 


//if we use this keyword in function it doesnt work here
// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
//     console.log(this);
// }
// chai()


// const chai = () => {
//     let username = "hitesh"
//     console.log(this.username);
// }


//arrow function

// const addtwo = (num,num2) => {
//     return num + num2
// }

// const addtwo = (num1,num2) => (num1 + num2)
const addtwo = (num1,num2) => ({username:"hitesh"})

// console.log(addtwo(6,9));
console.log(addtwo());
