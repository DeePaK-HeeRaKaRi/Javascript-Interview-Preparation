// convert to 24hrs format
const formatTime=(time)=>{
    // const timeLowerCased = time.toLowerCase();
    let [hrs,mins]=time.split(":")
    // console.log(hrs,mins)
    if(time.endsWith("AM")){
        hrs= hrs==="12" ? "00" : Number(hrs)+12
    }else if(time.endsWith("PM")){
        hrs= hrs==="12" ? hrs : Number(hrs)+12
    }
    return `${hrs}:${mins.slice(0,2)}`
}


console.log(formatTime("12:10AM"));  // 00:10
console.log(formatTime("12:33PM"));  //12:33

console.log(formatTime("1:20PM")) //13:20
console.log(formatTime("11:20PM"))