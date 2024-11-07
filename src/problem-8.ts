
{
    type Person = {
        name:string,
        age:number,
        email:string
    }
    let person:Person= { name: "Alice", age: 25, email: "alice@example.com"};
    const validateKeys = <T extends Person>(obj:T, keys:string[]):boolean =>{
        return keys.every(key=>key in obj) 
    }
    validateKeys(person,['name','age'])
    console.log(validateKeys(person,['name','age']))

   
    
    


}