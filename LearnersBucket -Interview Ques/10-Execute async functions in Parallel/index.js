function asyncParallel(tasks,callbacks){
    let results=[]
    let tasksCompleted=0
    tasks.forEach(asyncTask => {
         asyncTask(value => {
            console.log('value',value)
            results.push(value)
            tasksCompleted++
            if (tasksCompleted >= tasks.length) {
                callbacks(results);
            }                
         })
    })
}
 
function createAsyncTask(){
    const value=Math.floor(Math.random()*10)
    return function(callback){
        setTimeout(()=>{
           console.log('value in setTimeout',value)
           callback(value)
        },value*1000)
    }
}
 
const taskList=[createAsyncTask(),createAsyncTask(),createAsyncTask(),createAsyncTask(),createAsyncTask()]
asyncParallel(taskList,result=>{
    console.log('results',result)
})