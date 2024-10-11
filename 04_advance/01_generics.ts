const score: Array<number> = [1, 3, 4]
const names: Array<string> = ["hello", "world"]

function identityOne(val: number | boolean): number | boolean {
    return val
}

function identityTwo(val: any): any {
    return val
}

// better method
function identityThree<Type>(val: Type): Type {
    return val
}
// instead of Type we can use any other keyword also

function identityFour<T>(val: T): T {
    return val
}

identityFour(3) // get return number
identityFour("3") // get return string

// syntax for using manual types as generics

interface Key {
    id: string,
    pass: number
}

let myKey: Key = {
    id: "user123",
    pass: 1234
}

identityFour<Key>(myKey)

function getSearchProducts<T>(products: T[]): T {
    // do some database operation
    const myIndex = 3
    return products[myIndex]
}
// T[] - array of type T similar to Array<T>

const getMoreProducts = <T>(products: T[]): T => {
    // do some database operation
    const myIndex = 4
    return products[myIndex]
}

function myFunction<T, U>(valOne: T, ValTwo: U): object{
    return {
        valOne,
        ValTwo
    }
}

myFunction(2, "Hello")

function anotherFunction<T, U extends Number>(valOne: T, ValTwo: U): object{
    return {
        valOne,
        ValTwo
    }
}

function anotherFunction2<T>(valOne: T, ValTwo: number): object{
    return {
        valOne,
        ValTwo
    }
}

anotherFunction("a", 4) // here Type of U is must be a instance of Number
anotherFunction2("a", 4) // working fine
anotherFunction("a", new Number(40)) // parameter as instance of the Number
// anotherFunction2("a", new Number(40)) // throws an error

interface Hero {
    name: string,
    powers: string[]
}

function addHero<T extends Hero>(id: number, hero: T): object{
    return {
        id,
        hero
    }
}

addHero(123, {
    name: "Thor",
    powers: ["Thunder strike", "Thunder Punch"]
})


// Generic Class

interface Course {
    name: string,
    author: string,
    subject: string
}

interface Product {
    name: string,
    manufacturer: string,
    details: string
}

class Sellables<T>{
    public cart: T[] = []

    addToCart(product: T){
        this.cart.push(product)
    }
}

const book = new Sellables()
book.addToCart("Harry Potter")