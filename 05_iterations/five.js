const code = ["aa", "bb", "cc", "dd"]
// code.forEach(function (val){
//     console.log(val);
    
// })

// code.forEach((val) => {
// console.log(val);

// })

// function printme(item){
//     console.log(item);
// }
// code.forEach(printme)


// code.forEach( (item, index, arr) =>{
//     console.log(item, index, arr);
    
// })



const mycoding = [
    {
        "name" : "java",
        "shortcut" : "java"
    },
    {
        "name" : "python",
        "shortcut" : "py"
    },
    {
        "name" : "javascript",
        "shortcut" : "js"
    }
]
mycoding.forEach( (item) => {
    console.log(item.shortcut);
    
})