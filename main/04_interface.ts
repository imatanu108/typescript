interface Customer {
    readonly customerId: number,
    eamil: string,
    googleId?: string,
    // startTrail: () => string,
    startTrail(): string,
    getCoupon(couponName: string): number
}

// interfaces are similar to type but it has a special feature that we can reopen thw interface and add some more properties but we can't do that in types

interface Customer {
    githubId: string
}

const customer: Customer = {
    customerId: 1234,
    eamil: "xyz@mail.com",
    startTrail: () => {
        return "Start Trail."
    },
    getCoupon: (couponName: "Diwali10") => {
        return 10
    },
    githubId: "dev123"
}

// inheriting interface

interface Admin extends Customer {
    // all the properties of Customer alreday get assigned
    readonly adminId: string,
    adminKey: string
}

const admin: Admin = {
    customerId: 1234,
    eamil: "xyz@mail.com",
    startTrail: () => {
        return "Start Trail."
    },
    getCoupon: (couponName: "Diwali10") => {
        return 10
    },
    githubId: "dev123",
    adminId: "admin1234",
    adminKey: "passkey1234"
}