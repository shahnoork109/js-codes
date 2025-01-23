//Dates 
// let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);


let myCreatedDate = new Date(2025, 0, 23, 22,20)      //months start from 0 in js
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate1 = new Date("2025-01-23")      //months start from 1 in this type 
// console.log(myCreatedDate1.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newdate = new Date()
console.log(newdate.getMonth());


newDate.toLocaleString('default', {
    weekday: "long",
    
})