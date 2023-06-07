console.log('Implement mapSeries async function')
let mapSeries=((arr,fn)=>{
    console.log(arr,fn)
    const output=new Promise((resolve,reject)=>{
        const arrReduce=arr.reduce((prev,current)=>{
            return prev.then((val)=>{
                console.log('val',val)
                return new Promise((resolve,reject) =>{
                    fn(current,(error,resp)=>{
                        if(error){
                            reject(`failed at ${current} position`)
                        }else{
                            resolve([...val,resp])
                        }
                    })
                })
            })
           
        },Promise.resolve([]))
        arrReduce
        .then((resp)=>{
            resolve(resp)
        })
        .catch((err)=>{
            reject(err)
        })
    })
    // const output=new Promise((resolve,reject)=>{
    //     const arrReduce=arr.reduce((prev,current)=>{
             
    //         const pr=new Promise((resolve,reject) =>{
    //                 fn(current,(error,resp)=>{
    //                     if(error){
    //                         reject(`failed at ${current} position`)
    //                     }else{
    //                         resolve([...prev,resp])
    //                     }
    //                 })
    //             })
    //         pr.then((curresp)=>{
    //             prev=[...prev,curresp]
    //         })
            
    //         return prev
    //     },[])
    //     arrReduce
    //     .then((resp)=>{
    //         resolve(resp)
    //     })
    //     .catch((err)=>{
    //         reject(err)
    //     })
    // })
    return output
})
let result=mapSeries([1,2,3,6,4,5],function(num,callback){
    setTimeout(()=>{
        num=num*2
        console.log(num)
        if(num==12){
            callback(true)
        }else{
            callback(null,num)
        }
    },2000)
})
result
.then((resp)=>{
    console.log('success',resp)
})
.catch((err)=>{
    console.log('Error -> ',err)
})