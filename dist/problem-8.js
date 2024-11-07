"use strict";
{
    let person = { name: "Alice", age: 25, email: "alice@example.com" };
    const validateKeys = (obj, keys) => {
        return keys.every(key => key in obj);
    };
    validateKeys(person, ['name', 'age']);
    console.log(validateKeys(person, ['name', 'age']));
}
