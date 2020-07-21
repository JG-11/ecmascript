/*
    1. Default params 
*/

//Before
function foo(name, age, country) {
    name =  name || 'Genaro'
    age = age || 20
    country = country || 'MX'
    
    console.log(name, age, country)
}

foo()

//After (with ES6)
function fooTwo(name = 'Genaro', age = 20, country = 'MX') {
    console.log(name, age, country)
}

//fooTwo()
fooTwo('Pedro', 22, 'CO')


/*
    2. Concatenation
*/

//Before
let hello = 'Hello'
let world = 'World'
let phrase = hello + ' ' + world
console.log(phrase)

//After (using template literals)
let phraseTwo = `${hello} ${world}`
console.log(phraseTwo)


/*
    3. Multiline
*/

//Before
let lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a placerat nisl.\n'
+ 'Pellentesque habitant morbi.'
console.log(lorem)

//After
let loremTwo = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a placerat nisl.
Pellentesque habitant morbi.`
console.log(loremTwo)


/*
    4. Destructuring
*/

let airplane = {
    seats: 30,
    manufacturer: 'bar'
}

//Before
console.log(airplane.seats, airplane.manufacturer)

//After
let { seats, manufacturer } = airplane
console.log(seats, manufacturer)


/*
    5. Spread operator
*/

let teamOne = ['foo', 'bar', 'baz']
let teamTwo = ['qux', 'quux']
let complete = ['thud', ...teamOne, ...teamTwo]

console.log(complete)


/*
    6. let, var and const
*/

{
    var globalVar = 'Global var'
}

{
    let globalLet = 'Global let'
    console.log(globalLet)
}

console.log(globalVar)
//console.log(globalLet) -> globalLet is not defined, 'cause its scope is not global

//var scope is global, that's one of the main reasons why we need to start using let instead, 'cause JS is weakly typed

//we also have constant variables
const a = 'a'
console.log(a)
/* 
    a = 'b' -> error, 'cause it's an assignment to a constant variable
    console.log(a)
*/
