"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(_a) {
    var string = _a.name, boolean = _a.isWorking;
}
createUser({ name: "Alex", isWorking: false }); // we can not pass more parameters here
// createUser({name: "Alex", isWorking: false, email: "alex@mail.dev"}) // this will show an error that we can't pass email in the parameters
var userDetail = {
    name: "Alex",
    isWorking: false,
    email: "alex@mail.dev"
};
createUser(userDetail); // but we can pass userDetail as parameter with multiple properties
// returnig an object
function getUser(email) {
    var name = "Alex";
    var isWorking = false;
    return { name: name, isWorking: isWorking };
}
getUser("alex@mail.dev");
function offerJob(user) {
    var name = "Alex";
    var email = "alex@mail.dev";
    var isWorking = false;
    return { name: name, email: email, isWorking: isWorking };
}
var myUser = {
    name: "Alex",
    isWorking: false,
    email: "alex@mail.dev"
};
offerJob(myUser);
var newUser = {
    _id: "1234567",
    name: "Alex",
    email: "alex@mail.dev",
    isActive: false,
    // nickname: "alexy" // optional
};
// changing properties of newUser
newUser.isActive = true;
