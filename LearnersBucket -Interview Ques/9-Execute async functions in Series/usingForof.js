const asyncSeriesExecuter=async(promises) => {
    for(let promise of promises){
        try{
            const result=await promise
            console.log('result',result)
        }
        catch(e){
            console.log(e)
        }
    }
}
const asyncTask=(i)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(i==2){
                reject('Rejected at 2000 ms')
            }else{
                resolve(`completing the given task in ${i} secs`)
            }
            
        },1000*i)
        
    })
}
const promises=[asyncTask(3),asyncTask(1),asyncTask(7),asyncTask(2),asyncTask(5)]
asyncSeriesExecuter(promises)