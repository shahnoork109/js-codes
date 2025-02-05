// let myName = "hitesh     "
// console.log(myName.trueLength());




let myHeros = ['thor', 'spiderman']

let heroPower= {
    thor : "hammer",
    spiderman : "sling",

    getSpiderPower : function(){
        console.log(`spider power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log("hitesh is present in all objects");
}
Array.prototype.heyhitesh = function(){
    console.log("hitesh says hello");
}
// heroPower.hitesh()
// myHeros.hitesh()

// myHeros.heyhitesh()
// heroPower.heyhitesh()



//inheritance

const user = {
    name: 'chai',
    email : "nolan@123.com"
}


const teacher = {
    makeVideo : true
}
const teachingSupport = {
    isAvailabe : false
}
const TASupport = {
    makeAssignment : 'js assignment',
    fulltime : true,
    __proto__: teachingSupport
}

teacher.__proto__ = user

//modern syntax
Object.setPrototypeOf(teachingSupport, teacher)




//
let anotherUsername = "chaiAurCode      "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
    
}

anotherUsername.trueLength()
"iceTea".trueLength()