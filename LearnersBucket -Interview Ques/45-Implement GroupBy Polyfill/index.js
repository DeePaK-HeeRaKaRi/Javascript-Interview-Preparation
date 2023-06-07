// const groupBy=(arr,func)=>{
//   // console.log(arr,func)
//   const res=arr.reduce((prev,curr)=>{
//     const key=func(curr)
//     console.log('key---',key,prev,curr)
//     if(!prev[key]){
//       prev[key]=[curr]
//     }else{
//       prev[key].push(curr)
//     }
//     return prev
//   },{})
//   return res
// }

const groupBy=(arr,func)=>{
    let res={}
    for(let i=0;i<arr.length;i++){
      const key=typeof func === 'function' ?func(arr[i]) : arr[func]
      if(!res[key]){
        res[key]=[arr[i]]
      }else{
        res[key].push(arr[i])
      }
    }
    return res
  }
  // console.log(groupBy([6.1,6.5,4.1,4.2,3.4,3.5],Math.floor))
  console.log(groupBy(["one", "two", "three"], "length"));