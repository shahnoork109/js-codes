const name = "shahnoor"
const repoCount = 50

//one way to concatinate the string but it is not recommended to use 
// console.log(name + repoCount + " is my repocount");

//use can use below code
// console.log(`my name is ${name} and my repocount is ${repoCount} and hope you like this syntax`);

const gameName = new String('this is string')
// console.log(gameName[1]);
// console.log(gameName.__proto__);

console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('i'));

const newstr = gameName.substring(0,5)
console.log(newstr);


const newstr2 = gameName.slice(-11,4)
console.log(newstr2);

const newstr3 = "     hitesh           "
console.log(newstr3);
console.log(newstr3.trim());

const email = "hitesh@gmail.com"

console.log(email.replace('gmail', 'hotmail'));
console.log(email.includes('hitesh'));

console.log(gameName.split(' '));

const str = 'The quick-brown fox-jumps over-the lazy-dog.';

const words = str.split('-');
console.log(words);
console.log(words[3]);



