"use strict";
{
    const sumArray = (numbers) => {
        return numbers.reduce((total, value) => {
            return total + value;
        });
    };
    console.log(sumArray([4, 5, 35]));
}
