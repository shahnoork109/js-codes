const promiseOne = new Promise (function (resolve, reject){
   //do async task
   //db calls, cryptography, network
   setTimeout(function(){
    console.log('async task is complete');
    resolve()
    
   },1000) 
})

promiseOne.then(function(){
    console.log('Promise consumed');
    
})

//second way of using promise , similar to above but without variable
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('async task 2');
        resolve()
    },1000)
}).then(function(){
    console.log('async 2 resolved');
    
})



const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai",email:"chai@example.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user);
    
})



const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"hitesh",password:"1234"})
        }
        else{
            reject('ERROR: something went wrong')
        }
    },1000)
})

promiseFour
.then(function(user){
    console.log(user);
    return user.username
})
.then(function(username){
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(()=> console.log("The promise is either resolved or rejected"))



const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"javascript",password:"1234"})
        }
        else{
            reject('ERROR: js went wrong')
        }
    },1000)
})
//async thodi der wait karta hai kaam hone ka , agr woh ho jata hai toh aage badhta hai wrna wahi pe error dedeta hai

async function consumePromiseFive() {
    try{
        const response = await promiseFive
        console.log(response);
    }
    catch (error){
        console.log(error);
        
    }
}
consumePromiseFive()

//fetch
// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }
// getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data)=> console.log(data))
.catch((error)=> console.log(error))