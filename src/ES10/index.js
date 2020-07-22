/*
    1. flat() and flatMap()
*/

let array = [1, 2, 3, [4, 5, 6, [7, 8, 9]]]

console.log(array)
console.log(array.flat(2))

array = [1, 2, 3, 4, 5]
console.log(array.flatMap(value => [value, value * 2]))


/*
    2. trimStart() and trimEnd()
*/

let phrase = '    hello'
console.log(phrase)
console.log(phrase.trimStart())

let secondPhrase = 'hello     '
console.log(secondPhrase)
console.log(secondPhrase.trimEnd())


/*
    3. Optional catch binding

    //before
    try {
        ...
    } catch (error) {
        ...
    }

    //After
    try {
        ...
    } catch {
        ...
    }
*/


/*
    4. Object.fromEntries()
*/

let entries = [['name', 'Genaro'], ['age', 20]]
console.log(Object.fromEntries(entries))


/*
    5. Symbol description
*/

let description = 'Symbol description'
let symbol = Symbol(description)

console.log(symbol.description)