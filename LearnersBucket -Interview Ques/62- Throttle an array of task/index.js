
const throttle = (func, count, tasks, delay)=>{
    let lastFunc
    let lastRun

    let queue =[]
    return function(){
        let context = this
        let args=arguments
        // means executing for the first time
        if(!lastRun){
            queue = [...queue,...tasks]
            const executeTasks = queue.splice(0,count)
            func(executeTasks);
            lastRun = Date.now()
        }else{
            // clear lastFunc
            clearTimeout(lastFunc)
            lastFunc = setTimeout(() => {
              if (Date.now() - lastRun >= delay) {
                queue = [...queue, ...tasks];
                const executeTasks = queue.splice(0, count);
                func(executeTasks);
                lastRun = Date.now();
              }
            }, delay - (Date.now() - lastRun));
        }
    }
}

const tasks=[1,2,3,4,5,6,7,8,9,10]
const btn = document.getElementById('button')
btn.addEventListener(
  "click",
  throttle(function (currTask) {
    console.log("hello ", currTask);
  },3,tasks,3000)
);