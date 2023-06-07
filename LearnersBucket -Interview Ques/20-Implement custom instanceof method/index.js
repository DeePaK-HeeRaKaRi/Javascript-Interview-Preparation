const ownInstanceOf =(obj,target)=>{
    // console.log(typeof obj)
    if(obj == null || typeof obj !=='object'){
        return false
    }
    while(obj){
        console.log('proto----------',obj.__proto__,Object.getPrototypeOf(obj))
        console.log('target---------',target.prototype)
        // console.log('hi')
        if(obj.__proto__ === target.prototype) return true
        obj=obj.__proto__
    }
    return false
}
const details={name:'deepak',age:23,city:'hyd'}
// console.log(ownInstanceOf(details,Array))
console.log(ownInstanceOf(details,Object))

// var details1={name:'deepak',age:23,city:'hyd'}
// console.log(details1 instanceof Object)