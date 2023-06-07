const asyncSeriesExecuter=(promises)=>{
    const result=promises.reduce((prev,curr) => {
        return prev.then((res)=>{
            return curr.then((res)=>{
                console.log(res)
            })
        })
    },Promise.resolve(`First executed`))
    return result
}
const asynctask=(i)=>{
    console.log('in asynctask',i)
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve(`Executed after ${i} secs`)
        },1000*i)
    })
}
console.log('using reduce')
const promises=[asynctask(3),asynctask(1),asynctask(0),asynctask(7),asynctask(3)]
asyncSeriesExecuter(promises)
