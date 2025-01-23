const marvel_heros = ["thor", "ironman", "hulk"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allheros = marvel_heros.concat(dc_heros)
// console.log(allheros);

//spread way of merging array
// const my_new_all_heros = [...marvel_heros, ...dc_heros]
// console.log(my_new_all_heros);

const another_arr = [1,2,3, [4,5], 6,7,[2,3,4,[5,7,8]]]
const another_arr2 = another_arr.flat(Infinity)
console.log(another_arr2);


console.log(Array.isArray("shahnuuu"));
console.log(Array.from("shahnuuu"));
console.log(Array.from({name: "hitesh"}));  //special case

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));

