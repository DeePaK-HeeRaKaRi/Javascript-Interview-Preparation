// const arr=[1,2,3,4]
// const maparray=arr.map(e => e*2)
// console.log(maparray)

Array.prototype.myMap=function(callback){
    console.log(callback)
    console.log(this)
    let output=[]
    this.forEach((ele,index) => {
        console.log('callback----',callback(ele))
        output.push(callback(ele,index,this))
    })
    return output
}
const arr=[1,2,3,4]
console.log(arr.myMap(e=>e*2))

// What is an array prototype?
// prototype allows you to add new properties and methods to arrays. prototype is a property available with all JavaScript objects.


// function Person(first, last, age, eyecolor) {
//   this.firstName = first;
//   this.lastName = last;
//   this.eyeColor = eyecolor;
// }

// Person.prototype.nationality = "English";


// Arrow functions do not have their own this context, 
// so this inside the arrow function refers to the surrounding context, which is the global scope in this case.

// To fix this issue, you can use a regular function declaration instead of an arrow function for 