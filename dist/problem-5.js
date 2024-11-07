"use strict";
{
    const person = { name: "Alice", age: 30 };
    const getProperty = (obj, key) => {
        return obj[key];
    };
    console.log(getProperty(person, 'name'));
}
