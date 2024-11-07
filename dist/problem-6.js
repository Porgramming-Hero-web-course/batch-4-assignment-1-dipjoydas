"use strict";
{
    const person = {
        name: 'Dipjoy',
        age: 25,
        email: 'dipjoy488@gmail.com'
    };
    const updateProfile = (obj1, obj2) => {
        return Object.assign(Object.assign({}, obj1), obj2);
    };
    console.log(updateProfile(person, { name: 'Dipjoy das' }));
}
