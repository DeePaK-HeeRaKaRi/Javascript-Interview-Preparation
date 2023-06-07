const ancestry=(arr)=>{
    const map=arr.reduce((prev,cur)=>{
        const [parent,child]=cur
        prev[parent]=child
        return prev
    },{})

    // for better understanding do a dryRun
    // example -> lion -> cat ->mammal -> animal [so for animal we donthave anything in map so return ]

    // traverse untill the value is not found in the object -> i.e, present key

    // 
    const traverse=(obj,key)=>{
        const value=obj[key]
        if(value in obj){
            return traverse(obj,value) + ' -> ' + key
        }else{
            return value + ' -> ' + key
        }
    }
    console.log(map)

    const keys=Object.keys(map)
    const result=keys.reduce((prev,curr)=>{
        const treeResp=traverse(map,curr)
        prev.push(treeResp)
        return prev
    },[])

  
    return result
  
}
const arr = [
    ["lion", "cat"],
    ["cat", "mammal"],
    ["dog", "mammal"],
    ["mammal", "animal"],
    ["fish", "animal"],
    ["shark", "fish"],
];
console.log(ancestry(arr));

// [
//     "animal -> mammal -> cat -> lion",
//     "animal -> mammal -> cat",
//     "animal -> mammal -> dog",
//     "animal -> mammal",
//     "animal -> fish",
//     "animal -> fish -> shark"
// ]
    