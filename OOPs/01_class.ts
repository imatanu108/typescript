class User {
    email: string // by default its public
    public name: string
    private userId: string = String(Math.round(Math.random() * 10000))
    // private properties can only be accessed within the class
    readonly city: string = "Kolkata"
    constructor(email: string, name: string) {
        this.email = email
        this.name = name
    }
}

// alternative and pro syntax (Does the same job)

class User2 {
    private userId: string = String(Math.round(Math.random() * 10000))
    readonly city: string = "Kolkata"
    constructor(
        public email: string,
        private name: string
    ) { }
}


const alex = new User("alex@mail.dev", "Alex")
// alex.city = Mumbail // throws an error as read-only properties can not be changed


export {}