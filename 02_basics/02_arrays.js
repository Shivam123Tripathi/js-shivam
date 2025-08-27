const marvel_heros = ["Thor", "Spider Man","Spiderman"]
const  dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros)
console.log(marvel_heros);

//spread operator it is mostly used than concat oprator
const all_new_heros = [...marvel_heros,...dc_heros]
console.log(all_new_heros);

// flat used very less

const another_array = [1, 2, 3, [4, 5, 6,],[6, 4, 5], [7]]
const real_array = [another_array.flat(Infinity)] //we can use infinity so that it could check by itself

console.log(another_array);



console.log(Array.from("Shivam")) //converts into array

console.log((Array.from({name: "shivam"}))); //interesting asked in interviews
//this returns empty array

let score1  = 100
let score2  = 200
let score3  = 300
console.log(Array.of(score1, score2, score3)); //returns new array


///