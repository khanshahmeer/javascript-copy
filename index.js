/// start with strings, number & boolean
let age = 20;
let age2 = age;
console.log(age, age2);
age = 19;

console.log(age, age2);

let name = "shahmeer";
let name1 = name;

console.log(name, name1);
name = "fakhar";

console.log(name1, name);


//// let say we have an array

const player = ["babar", "rizwan", "asif", "haris", "shahdab"];

console.log(player);


//// and we want to make a copy of it

const team = player;

console.log(player, team);
 
team[3] = "shaheen";


/// you might think we can just do something like this

//// however what happens  when we update

/// now here is the problem!


//// oh no -we have edited the original array too!

/// why? It's because that is an array references, not an array copy. they both to the same array!


///s0, how do we fix this? we take a copy instead!

const team2 = player.slice();
/// one way

/// or create  a new array and concat the old one in

const team3 = [].concat(player);

/// or use the new ES6 spread

const team4 = [...player];
team4[2] = "nice team!";
console.log(team4);

const team5 = Array.from(player);


/// now when we update it. the original one isn't changed

/// The same thing goes for object, let's say we have a person object

/// with objects
const person = {
    name: "shahmeer",
    fatherName: "fakhar",
    age: 20,
}

console.log(person);
/// and think we make a copy
//const person2 = person;
//person2.number = 87;

//// how do we take a copy instead?
const cap2 = Object.assign({},person);
console.log(cap2);



/// we will hopefully soon  see the object ....spread
const cap3 = {...person};

///things to note - this is only 1 level deep - both fo array and objects. Lodash has a cloneDeep method, but you should think twice before using it

const abc = {
    name: "sheikh",
    age: 34,
    social: {
        facebook: "xyz",
        Instagram: "abc",
    }

}

console.log(abc);

const xyz = Object.assign({}, abc);

const dev = JSON.parse(JSON.stringify(abc));

