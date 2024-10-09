function createUser({ name: string, isWorking: boolean }) { }

createUser({ name: "Alex", isWorking: false }) // we can not pass more parameters here
// createUser({name: "Alex", isWorking: false, email: "alex@mail.dev"}) // this will show an error that we can't pass email in the parameters

let userDetail = {
    name: "Alex",
    isWorking: false,
    email: "alex@mail.dev"
}

createUser(userDetail) // but we can pass userDetail as parameter with multiple properties


// returnig an object
function getUser(email: string): { name: string, isWorking: boolean } {
    let name = "Alex"
    let isWorking = false
    return { name, isWorking }
}

getUser("alex@mail.dev")


// Type aliases: creating manual types
// creating an user type
type User = {
    name: string,
    email: string,
    isWorking: boolean
}
// creating an string type
type myString = string

function offerJob(user: User): User {
    let name = "Alex"
    let email = "alex@mail.dev"
    let isWorking = false
    return { name, email, isWorking }
}

let myUser = {
    name: "Alex",
    isWorking: false,
    email: "alex@mail.dev"
}

offerJob(myUser)

// Readonly and optional

type MyUser = {
    readonly _id: string, // can't be modified
    name: string,
    email: string,
    isActive: boolean,
    nickname?: string // optional
} 

let newUser: MyUser = {
    _id: "1234567",
    name: "Alex",
    email: "alex@mail.dev",
    isActive: false,
    // nickname: "alexy" // optional
}

// changing properties of newUser

newUser.isActive = true
// newUser._id = "9876543" // thow an error as _id is read-only


export { }