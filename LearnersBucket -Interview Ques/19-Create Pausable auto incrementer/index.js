const timer=(init=0,step=1)=>{
    let intervalId
    let count=init

    const startTimer=()=>{
        if(!intervalId){
            console.log('Timer started')
            intervalId=setInterval(()=>{
                console.log(count)
                count+=step
            },1000)
        }
    }

    const clearTimer=()=>{
        clearInterval(intervalId)
        intervalId=null
        count=init
        console.log('Timer has been paused')
    }
    return {startTimer,clearTimer}
}
function onClickStart(){
    const timerObj=timer(10,10)
    timerObj.startTimer()
    setTimeout(()=>{
        timerObj.clearTimer()
        timerObj.startTimer()
        setTimeout(() => {
            timerObj.clearTimer()
        },4200)
    },4200)
}


const btn1=document.querySelector('.btn')
btn1.addEventListener('click',onClickStart)