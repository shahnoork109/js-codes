const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        console.log(`Username: ${this.username}`);
        // console.log(this);
    }

}

// console.log(user.username);
// console.log(user.getUserDetails());




function User(username,userCount, userLoggedIn){
    this.username = username;
    this.userCount = userCount;
    this.userLoggedIn= userLoggedIn;

    // return this
}

//aise use karna values ko override kar deta hai 
// const userOne = User("hitesh", 132, true)
// const userTwo = User("sailesh", 190, false)

//isliye hum "new" use karke ek instance lete hai
const userOne = new User("hitesh", 132, true)
const userTwo = new User("sailesh", 190, false)
// console.log(userOne);
// console.log(userTwo);
console.log(userOne.constructor);
