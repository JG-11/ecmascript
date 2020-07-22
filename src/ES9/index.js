/*
    1. Spread operator
*/

const obj = {
    name: 'Genaro',
    age: 20,
    country: 'MX'
}

let { age, ...all } = obj
console.log(all)


/*
    2. Propagation properties
*/

const objTwo = {
    name: 'Genaro',
    age: 20
}

const objThree = {
    ...objTwo,
    country: 'MX'
}

console.log(objThree)


/*
    3. Promise Finally
*/

const promise = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            setTimeout(() => resolve('Resolve'), 3000)
        } else {
            reject(new Error('Reject'))
        }
    })
}

promise()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finally'))


/*
    4. Regular expressions and groups
*/

const regex = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/
const match = regex.exec('2020-21-07')

/*
Alternative one

const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day)*/

//Alternative two
const { year, month, day } = match.groups
console.log(year, month, day)