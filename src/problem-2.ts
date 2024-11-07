{
type RemoveDuplicates = (arr:number[])=>number[]
const removeDuplicates :RemoveDuplicates = (arr)=>{
    const uniqueNumbers = new Set<number>();
    return arr.filter((num)=>{
        if(uniqueNumbers.has(num)){
            return false
        }else {
            uniqueNumbers.add(num)
            return true 
        }
    })
    
}
console.log(removeDuplicates([1,1,3,4,6,78,79,78,3,5,1,7]))
}
