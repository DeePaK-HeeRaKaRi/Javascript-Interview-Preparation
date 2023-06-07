const sum=(...args) => {
    
    if(args.length===4){
        return args.reduce((prevValue,curValue) =>{
            const result=prevValue+curValue
            return result
        },0)
    }
    else{
        const inner=(...args2)=>{
            console.log(args,typeof args,args2)
            args=args.concat(args2)
            // if(typeof args == )
            if(args.length === 4){
                return args.reduce((prevValue,curValue) =>prevValue+curValue,0)
            }else{
                return inner
            }
        }
        return inner
    }
}

const res = sum(1, 2, 3, 4)
const res2 = sum(1)(2)(3)(4)
const res3 = sum(1, 2)(3, 4);
const res4 = sum(1, 2, 3)(40);
const res5 = sum(1)(2, 3, 4);
console.log(res, res2, res3, res4, res5);
// console.log(res2)

 