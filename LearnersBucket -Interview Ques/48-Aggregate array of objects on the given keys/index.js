const aggregate=(arr,on,who)=>{
    const res=arr.reduce((prev,curr)=>{
         const onValue=curr[on]
         const whoValue=curr[who]
         if(prev[onValue]){
            prev[onValue]={
                "skill":onValue,
                "user":[...prev[onValue].user,whoValue]
            }
         }else{
            prev[onValue]={
                "skill":onValue,
                "user":[whoValue]
            }
         }
        //  console.log(prev)
         return prev
    },{})
    console.log(res)
    // return res
    let ans=[]
    for(let key in res){
        ans.push(res[key])
    }
    
    return ans
}

const endorsements = [
  { skill: "css", user: "Bill" },
  { skill: "javascript", user: "Chad" },
  { skill: "javascript", user: "Bill" },
  { skill: "css", user: "Sue" },
  { skill: "javascript", user: "Sue" },
  { skill: "html", user: "Sue" },
];
console.log(aggregate(endorsements, "skill", "user"));

// Output: [
//   {
//     skill: "css",
//     user: ["Bill", "Sue"],
//   },
//   {
//     skill: "javascript",
//     user: ["Chad", "Bill", "Sue"],
//   },
//   {
//     skill: "html",
//     user: ["Sue"],
//   },
// ];
