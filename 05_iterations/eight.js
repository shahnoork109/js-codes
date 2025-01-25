const myNum = [1,2,3]
// const myTotal = myNum.reduce(function (acc, curVal) {
//     console.log(`acc: ${acc} and curVal: ${curVal}`);
//     return acc + curVal
// },3)        //<-- here 0 is the acc value

const myTotal = myNum.reduce( (acc, curVal) => acc + curVal, 0)
console.log(myTotal);




const shoppingCart = [
    {
        courseName : "py course",
        price : 599
    },
    {
        courseName : "java course",
        price : 999
    },
    {
        courseName : "full stack course",
        price : 2000
    },
    {
        courseName : "cybersecurity course",
        price : 12999
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(priceToPay);

