/*
    1. BigInt
*/

const theBiggestInt = 9007199254740991n
console.log(theBiggestInt)

const hugeOne = BigInt(9007199254740991)
console.log(hugeOne)

const hugeString = BigInt("9007199254740991")
console.log(hugeString)
console.log(typeof hugeString)

console.log(theBiggestInt + hugeString / hugeOne * theBiggestInt - hugeString)


/*
    2. Nullish coalescing operator
*/

const obj = {
    name: 'Genaro',
    age: 20,
    country: ''
}

//Before
console.log(obj.country || 'MX')

//After
//console.log(obj.country ?? 'MX')


/*
    3. Optional chaining operator
*/

const user = {}

//Before
console.log(user && user.profile && user.profile.name)

//After
//console.log(user?.profile?.name)


/*
    4. globalThis
*/

/*
    Before

    console.log(window)
    console.log(self)
    console.log(global)
    console.log(this)
    console.log(frames)
*/

//After
console.log(globalThis)


/*
    5. Dynamic import

    Option one
    
    const helper = './helper'

    import(helper).then(module => {
        module.foo()
        module.bar()
    })


    Option two

    (async function importCheck() {
        const helper = './helper'
        const module = await import(helper)
        module.foo()
        module.bar()
    })()
*/