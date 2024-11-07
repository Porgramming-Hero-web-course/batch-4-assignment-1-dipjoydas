# The significance of union and intersection types in Typescript
TypeScript provides two powerful type constructs—Union and Intersection types—that allow developers to create complex types by combining existing types. These constructs enhance type safety and make TypeScript code more expressive and flexible.

## Union Types 
A Union Type allows a variable to hold values of different types, essentially saying, "this value can be one of several types." In TypeScript, union types are denoted with the | (pipe) symbol.

### Example 
```tsx  
type StringOrNumber = string | number;

function display(value: StringOrNumber) {
    if (typeof value === "string") {
        console.log(`String: ${value}`);
    } else {
        console.log(`Number: ${value}`);
    }
}

display("Hello");  // String: Hello
display(123);      // Number: 123

```

In this example, the StringOrNumber type can be either a string or a number. The display function checks the type at runtime to handle the value accordingly.

### Use Cases for Union Types
 * Handling values that can be of multiple types, like string | number | boolean.
*  Simplifying APIs to accept various input types.
* Making function parameters more flexible, e.g., a parameter that can accept different types of data.




## Intersection Types
An Intersection Type combines multiple types into one. It says, "this value must satisfy all these types." Intersection types are denoted with the & symbol.

### Example 
```tsx  
type Person = {
    name: string;
    age: number;
};

type Employee = {
    employeeId: number;
    position: string;
};

type EmployeeProfile = Person & Employee;

const john: EmployeeProfile = {
    name: "John Doe",
    age: 30,
    employeeId: 101,
    position: "Software Developer"
};

console.log(john);




```

In this example, the EmployeeProfile type is an intersection of Person and Employee. Therefore, any object of type EmployeeProfile must have all properties of both Person and Employee.

### Use Cases for Intersection Types 
 * Creating objects that share properties from multiple sources.
*  Defining complex structures with multiple properties.
* Enforcing multiple types on a single value for strict type-checking.