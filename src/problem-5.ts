{
    type Person = {
        name:string,
        age:number
    }
    const person:Person = { name: "Alice", age: 30 };
    const getProperty=<X,Y extends keyof X>(obj:X,key:Y)=>{
       return obj[key]
    }
    console.log(getProperty(person,'name'))
}