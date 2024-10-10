let user: (string | number)[] = [1, "Hello", 3]

let myUser: [string, number, boolean] = ["typescript", 10, true]
// myUser array must follow the order type [string, number, boolean] --> ["typescript", 10, true], we can not rearrange the elements inside, the array must follow the order of the type mentioned

type RGB = [number, number, number]
let rgb: RGB = [255, 123, 55]

type NewUser = [string, number]
let user1: NewUser = ["User", 12345678]
