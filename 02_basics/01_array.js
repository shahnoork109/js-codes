// const myarr = [0,1,2,3,4,5,6]
// console.log(myarr[0]);

// const myHeroes = ["shaktiman", "guruji"]
// console.log(myHeroes[0]);

// const myarr2 = new Array(1,2,3,4,5,6)

// myarr.push(8)
// myarr.pop()
// myarr.unshift(9)
// myarr.shift(9)
// console.log(myarr);

// console.log(myarr.includes(9));
// console.log(myarr.indexOf(9));

// const newarr = myarr.join()
// console.log(myarr);
// console.log(typeof newarr);



const myarr1 = [0,1,2,3,4,5,6]

//sclice and splice
//slice just give us the element at the given index but does not chnage in main arr
//splice gives the element , also remove drom the main array 


console.log("A ", myarr1);          //this will print real array

//slice
const myn1 = myarr1.slice(1,3)
console.log(myn1);                   //sliced element
console.log("B " , myarr1);           //main array after slicing

//splice
const myn2 = myarr1.splice(1,3)       
console.log(myn2);                   //it give [1,2,3] from main array and remove these elements from the array
console.log("c " , myarr1);         //check this output