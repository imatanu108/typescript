let userId: number | string = 1234
userId = 5432
userId = "1234" // No errors here as the type of userId can be both number or string

type User = {
    name: string,
    id: number
}
type Admin = {
    username: string,
    id: number
}

let alex: User | Admin = {name: "Alex", id: 1234} // assigning type User
alex = {username: "admin1234", id: 9876} // re-assigning type Admin

let getDbId = (id: number | string): string => {
    if (typeof id === "string") {
        return id.toLowerCase() // here the id is type-string
    } else {
        return id.toExponential() // here the id is type-number
    }
}

getDbId(3) // parameter type: number
getDbId("3") // parameter type: string

let data: number[] = [1, 2, 3]
let data1: string[] = ["1", "2", "Hello world!"]
let data3: number[] | string[] = [1, 2, 3] // ["Hello", "world!", "Dev"] - this type allows either all numbers or all strings
let data4: (number | string)[] = [1, "Hello", 3, "World!"] // mixed numbers and strings
let anyData: any[] = [1, "2", true, "Hello", 3.55, {name: "Alex"}, [1, 2, 3, 6]]


let seatAllotment: "aisle" | "middle" | "window" // seat allotment can only be out of this three choises
seatAllotment = "middle"