Array.prototype.chop=function(size){
    // do not mutate the array directly
    let temp=[...this]
    if(!size || size>temp.length){
        return [temp]
    }
    const output=[]
    let i=0
    while(i<temp.length){
        output.push(temp.slice(i,i+size))
        i=i+size
    }
    return output
}
const mapLimit=((arr,limit,fn)=>{
    const mapLimitOutput = new Promise((resolve,reject) => {
        let choppedArr = arr.chop(limit)
        console.log('choppedArr',choppedArr)
        let batches=0
        let chopp=[]
        const final=choppedArr.reduce((prev,cur) => {
            return prev.then((val)=>{
                const subArrayResult = new Promise((resolve,reject) => {
                    const results=[]
                    let taskCompleted=0
                    cur.forEach((e)=>{
                        fn(e,(error,resp) => {
                            if(error){
                                reject(`failed at ${e}`)
                            }else{
                                taskCompleted++
                                results.push(resp)
                                if(taskCompleted>=cur.length){
                                    console.log('baches',batches++)
                                    chopp.push(results)
                                    // resolve([...val,...results])
                                    resolve(chopp)
                                }
                            }
                        })

                    })
                })
                return subArrayResult
            
            })
        },Promise.resolve([]))

        final
        .then((result) => {
            resolve(result);
        })
        .catch((e) => {
            reject(e);
        })
        // .finally(() => {
        //     console.log('Traversing all elements are finished')
        // })
    })
    return mapLimitOutput    
})
const arr=[1,2,3,4,5,6,7,8]
// console.log(arr.chop(3))
let limit=3
const numPromise=mapLimit(arr,limit,function(num,callback){
    setTimeout(()=>{
        num=num*2
        console.log(num)
        // callback(null,num)
        if(num==12){
            callback(true,num)
        }else{
            callback(null,num)
        }
        
    },4000)
})
numPromise
.then((resp)=>{
    console.log('Success ->',resp)
})
.catch((err)=>{
    console.log('Error ->',err)
})
.finally(()=>{
    console.log('Map limit is completed')
})