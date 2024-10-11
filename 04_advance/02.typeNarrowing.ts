function printAllOne(strs: string | string[]) {
    if (typeof strs === "object") {
        for (const s of strs) {
            console.log(s);
        }
    } else if (typeof strs === "string") {
        console.log(strs);
    }
}

function printAllTwo(strs: string | string[] | null) {
    if (strs && typeof strs === "object") {
        for (const s of strs) {
            console.log(s);
        }
    } else if (typeof strs === "string") {
        console.log(strs);
    }
}

function multiplyAll(
    values: number[] | undefined,
    factor: number
): number[] | undefined {
    if (!values) {
        return values;
    } else {
        return values.map((x) => x * factor);
    }
}

// Instanceof narrowing
function logValue(x: Date | string) {
    if (x instanceof Date) {
        console.log(x.toUTCString());

    } else {
        console.log(x.toUpperCase());

    }
}

// In Operator Narrowing
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird) {
    if ("swim" in animal) {
        return animal.swim();
    }

    return animal.fly();
}

// Using Type predicates

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}

// lets assume the pet is fish so '(pet as Fish).swim !== undefined' this is true, so we get return true, now the return type of isFish function is 'pet is Fish' (Boolean) either true or false, if its true then pet is Fish else its Bird.

// here return 'pet is Fish' is kind of boolean type

function getFood(pet: Fish | Bird) {
    if (isFish(pet)) {
        pet // Here pet is Fish
        return "Fish Food."
    } else {
        pet // Here pet is Bird
        return "Bird Food."
    }
}