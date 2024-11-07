{
    type Circle = {
        shape:'circle' ,
        radius:number
    }
    type Rectangle = {
        shape:'rectangle',
        width:number,
        height:number
    }
    const calculateShapeArea =(obj:Circle | Rectangle):number=>{
        if(obj.shape ==='circle'){
            return Number(( Math.PI *  Math.pow(obj.radius,2)).toFixed(2))
        }else{
            return obj.height * obj.width
        }
    }

    const circleArea = calculateShapeArea({ 
        shape: "circle",
         radius: 5 
        });
    const rectangleArea = calculateShapeArea({
        shape: "rectangle",
        width: 4,
        height: 6,
      });
      console.log(circleArea,rectangleArea)
}