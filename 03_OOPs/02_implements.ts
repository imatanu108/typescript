// interface Animal {
//     name: string;
//     age: number;
//     makeSound(): void;
// }

// let dog: Animal = {
//     name: 'Rex',
//     age: 5,
//     makeSound() {
//         console.log('Woof!');
//     }
// };

// dog.makeSound(); // Output: Woof!


interface Animal {
    name: string;
    age: number;
    makeSound(): void;
}


class Dog implements Animal {
    name: string;
    age: number;
    
    // If a class implements an interface, it must provide concrete implementations for all the properties and methods defined in that interface.

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    makeSound() {
        console.log(`${this.name} says Woof!`);
    }
}

let myDog = new Dog('Buddy', 4);
myDog.makeSound(); // Output: Buddy says Woof!
