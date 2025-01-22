/*
stack-->(primitive)                 Heap(Non-primitive data type)
1.we get copy of the variable value in stack so if we change value of copy it doesn not change the value of real variable
2. we get instance of variable value in heap , so if we change value in heap it also change the value of real ones
Below are the examples:-
*/

//below are the examples of stack 
// let mySalary1 = 45900
// let mySalary2 = mySalary1
// mySalary2 = 60812
// console.log(mySalary1);
// console.log(mySalary2);


let myYtName = "harry Potter"
let myNickname = myYtName

myNickname = "Aaabra ka dabra"
console.log(myYtName);
console.log(myNickname);


//below are the example of heap
let data1 ={
    email : "shahn@gmail.com",
    age : 23
}
let data2 = data1
data2.email = "khan@gmail.com"

console.log(data1.email);
console.log(data2.email);

