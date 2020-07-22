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


/*
    3. Async/Await
*/

const promise = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            setTimeout(() => resolve('Cool!'), 3000)
        } else {
            reject(new Error('Ups!'))
        }
    })
}

const callPromise = async () => {
    const response = await promise()

    console.log(response)
}

callPromise()

const callPromiseProperly = async () => {
    try {
        const response = await promise()

        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

callPromiseProperly()