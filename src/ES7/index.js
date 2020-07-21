/*
    1. includes(element, index)
*/

const numbers = [1, 2, 3, 4, 5]

if(numbers.includes(7)) {
    console.log('It exists')
} else {
    console.log('It does not exist')
}

const name = 'Genaro'

if(name.includes('a')) {
    console.log('It includes that character')
} else {
    console.log('It does not include that character')
}

if(name.includes('e', 2)) {
    console.log('It includes the element after the specified index')
} else {
    console.log('It does not include the element after the specified index')
}


/*
    2. Exponentiation
*/

let x = 4
let y = 5

//Before
let res = Math.pow(x, y)
console.log(res)

//After
res = x ** y
console.log(res)