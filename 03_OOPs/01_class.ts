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

// getters and setters

class User3 {
    private userId: string = String(Math.round(Math.random() * 10000))
    readonly city: string = "Kolkata"
    constructor(
        public email: string,
        private age: number,
        private name: string
    ) { }

    // getter
    get getUserId (): string {
        return this.userId.toUpperCase()
    }

    get getAge(): number {
        return this.age
    }
    // setter - using set we can not add any return type even void isn't allowed
    set setAge(age: number){
        if (age > 0) {
            this.age = age
        } else {
            console.log("Age can't be negetive.")
        }
    }
}

// protected

class User4 {
    private userId: string = String(Math.round(Math.random() * 10000))
    readonly city: string = "Kolkata"
    constructor(
        protected email: string, // protected is similar to private, in private we can access the property only within the class not outside or in any sub-class (inheritance), but protected properties can be accessed in all sub-classes but not outside of the class or sub-classes
        private name: string
    ) { }
}

class SubUser extends User4 {
    isFamily: boolean = true
    changeEmail(newEmail: string) {
        this.email = newEmail // but here this.name isn't a property as its private not protected
    }
}

const user1 = new User4("user1@mail.dev", "User 1")

export {}