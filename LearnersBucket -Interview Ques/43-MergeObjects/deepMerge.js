const merge=(...arguments)=>{
    let target={}
    for(let i=0;i<arguments.length;i++){
       
      let obj=arguments[i]
      for(let prop in obj){
        console.log('prop',prop,target)
        if(obj.hasOwnProperty(prop)){
          if(typeof obj[prop]=='object' && obj[prop]!=null && !Array.isArray(obj[prop])){
            target[prop]=merge(target[prop],obj[prop])
          }else{
            target[prop]=obj[prop]
          }
        }
      }
    }
    return target
    
  }
  let obj1 = {
    name: 'prashant',
    age: 23,
    nature: {
      "helping": true,
      "shy": false
    }
  }
  let obj2 = {
    qualification: 'BSC CS',
    loves: 'Javascript',
    nature: {
      "angry": false,
      "shy": true
    },
    attendees:{students:["deepak","kumar"]}
  }
  let obj3={
    office:"mindtree",
    location:"hyderabad"
  }
  console.log(merge(obj1, obj2,obj3));