{
    interface Profile {
        name:string,
        age:number,
        email:string
    }
    const person:Profile = {
        name:'Dipjoy',
        age:25,
        email:'dipjoy488@gmail.com'
    }
    const updateProfile =(obj1:Profile,obj2:Partial<Profile>):Profile=>{
        return {...obj1, ...obj2}

    }
    console.log(updateProfile(person,{name:'Dipjoy das'}))
}