"use strict";
// defining types of the parameters
Object.defineProperty(exports, "__esModule", { value: true });
function square(num) {
    return num * num;
}
square(5);
function getUpper(str) {
    return str.toUpperCase();
}
getUpper("abcd");
function signUpUser(name, email, mobile) { }
signUpUser("Alex", "alex@mail.dev", 12345);
var logInUser = function (name, email, isLoggedIn) {
    if (isLoggedIn === void 0) { isLoggedIn = false; }
};
logInUser("Alex", "alex@mail.dev"); // third parameter is option as it has a default value
// defining type of what the function returns
function isSubscribed(userId) {
    var subscribers = [];
    if (userId in subscribers)
        return true;
    return false;
}
var greetUser = function (user) {
    return "Hello, ".concat(user, ".");
};
var heros = ["Thor", "Hulk", "Spiderman"];
heros.map(function (hero) {
    return "Hero is ".concat(hero, ".");
});
function consoleError(errmsg) {
    console.log(errmsg);
}
// when a function returns nothing its return type is void.
function handleError(errmsg) {
    throw new Error(errmsg);
}
