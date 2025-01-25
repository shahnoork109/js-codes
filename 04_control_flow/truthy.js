// const username = "hitesh@"
// const username = ""
const arr = []


// if (username) {
//     console.log("you are logged in");
// }
// else{
//     console.log("not found !!");
// }


//falsy value
// false , 0,-0, "",Bigint, null, undefinde, NaN    these are truthy value


//truthy value
// [], "0", 'false', " ", {}, function(){}, 




if (arr.length ===0){
    console.log("array is empty");
}

const emptyObj = {}
if (Object.keys(emptyObj).length===0) {
    console.log("object is empty");
    
}


//nullish coalescing operator ??  : null undefined
let val1
// val1 = 5 ?? 10
// val1 = null ?? 10
val1 = undefined ?? 10

console.log(val1);



//ternary operator 
// condition ? true : false

const iceprice = 100
iceprice <= 80  ? console.log("value is less than 80") : console.log("value is greater than 80");


