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
