/*
    1. Object.entries() and Object.values()
*/

const data = {
    frontend: 'React',
    backend: 'Laravel',
    testing: 'Travis', //<-- trailing commas (final commas)
}

const arr = Object.entries(data)
console.log(arr)

const arrTwo = Object.values(data)
console.log(arrTwo)

//object length
console.log(arr.length)


/*
    2. String padding
*/

const phrase = 'Genaro'
console.log(phrase.padStart(9, 'Hi '))
console.log(phrase.padEnd(12, ' -----'))