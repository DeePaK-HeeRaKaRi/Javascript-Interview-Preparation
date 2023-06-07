// polyfill for promiseALL
const promiseAll = (taskList) => {
    const result=[]
    let promiseCompleted=0
    return new Promise((resolve,reject) => {
        taskList.forEach((promise,index)=>{
            promise
            .then((val) => {
                // console.log(val)
                result[index]=val
                promiseCompleted+=1
                if(promiseCompleted === taskList.length){
                    // console.log(result);
                    resolve(result)
                }
            })
            .catch((err) => {
                reject(err)
            })
        })
    }) 
}
// tc-1 for reslve
const timer=(time) => {
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve(time)
        },time)
    })
}

// const timer=(time) => {
//     return new Promise((resolve,reject) => {
//         setTimeout(()=>{
//             if(time>=3000){
//                 reject(`rejected - the time is is greater than 3000`)
//             }else{
//                 resolve(time)
//             }
            
//         },time)
//     })
// }

const taskList=[timer(1000),timer(2000),timer(3000)]
promiseAll(taskList)
.then((results) => {
    console.log(`results arrived ${results}`)
})
.catch((err) => {
    console.log(err)
})
