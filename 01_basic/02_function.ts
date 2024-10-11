// defining types of the parameters

function square(num: number) {
    return num * num
}
square(5)

function getUpper(str: string) {
    return str.toUpperCase()
}
getUpper("abcd")

function signUpUser(name: string, email: string, mobile: number) { }
signUpUser("Alex", "alex@mail.dev", 12345)

let logInUser = (name: string, email: string, isLoggedIn: boolean = false) => { }
logInUser("Alex", "alex@mail.dev") // third parameter is option as it has a default value

// defining type of what the function returns

function isSubscribed(userId: number): boolean {
    let subscribers = []
    if (userId in subscribers) return true;
    return false;
}

let greetUser = (user: string): string => {
    return `Hello, ${user}.`
}

let heros = ["Thor", "Hulk", "Spiderman"]

heros.map((hero): string => {
    return `Hero is ${hero}.`
})

function consoleError(errmsg: string): void {
    console.log(errmsg)
}
// when a function returns nothing its return type is void.

function handleError(errmsg: string): never {
    throw new Error(errmsg)
}

export { }