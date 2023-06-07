const renderTime=document.querySelector('#time')
const clock=()=>{
    const date=new Date()
    let hrs=date.getHours()
    let mins=date.getMinutes()
    let secs=date.getSeconds()

    return `${pad(hrs)}:${pad(mins)}:${pad(secs)}`
}

// if inp length is 0 append 0 before to it
const pad=(inp)=>{
    return String(inp).length === 1 ? '0'+String(inp) :String(inp)
}
setInterval(()=>{
    renderTime.innerHTML=clock()
    console.log(clock())
},1000)
