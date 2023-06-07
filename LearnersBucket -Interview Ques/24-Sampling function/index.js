const message=(param,pr)=>{
    console.log('-------',param)
    console.log('hello exceuted after 4 calls',pr)
}
const sampler=(fn,limit)=>{
    let counter=0
    return function(...args){
        let context=this
        // let args1=arguments
        let args1=args
        console.log(args1)
        counter++
        if(counter==limit){
            fn.apply(context,[args1,args1[0]])
            counter=0
        }
    }
}
const sample=sampler(message,4)
sample()
sample()
sample()
sample('deepak','kumar') //hello -> excutes here
sample()
sample()
sample()
sample('kumar','heerakari') //hello -> excutes here