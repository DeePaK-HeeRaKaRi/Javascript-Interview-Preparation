const STATE={
    FULFILLED:'fulfilled',
    PENDING:'pending',
    REJECTED:'rejected'
}
class MyPromise{
    // (resolev,reject) -> cb
    #thenCbs=[]
    #catchCbs=[]
    #state=STATE.PENDING
    #value
    // for chaining this willl mess up so use binding
    #onSuccessBinded=this.#onSuccess.bind(this)
    #onFailureBinded=this.#onFail.bind(this)
    constructor(cb){
        try{
            cb(this.#onSuccessBinded,this.#onFailureBinded)
        }
        catch(e){
            this.onFail(e)
        } 
    }
    #runCallbacks(){
        if(this.#state === STATE.FULFILLED){
            this.#thenCbs.forEach(callback => {
                callback(this.#value)
            })
            // .then() .then() new promise so previous callbacks should be removed
            this.#thenCbs=[]
        }
        if(this.#state === STATE.REJECTED){
            this.#catchCbs.forEach(callback => {
                callback(this.#value)
            })
            // .then() .then() new promise so previous callbacks should be removed
            this.#catchCbs=[]
        }
    }
    //  #it should not be accessed outside of the class
    #onSuccess(value){
        // whenever success or failed we make sure that we dont actually execute the code immmediately just wait for microseconds
        queueMicrotask(() => {
            if(this.#state !== STATE.PENDING) return

            // inside of our success methids we have to handle both promise and values
            // p.then(() => {
                // return new Promise
            //     return "hi"
            // })
            // .then(())
            // so if it has a promise finish that promise
            if(value instanceof MyPromise){
                value.then(this.#onSuccessBinded,this.#onFailureBinded)
            }
            this.#value=value
            this.#state=STATE.FULFILLED
            this.#runCallbacks()
        })
       
    }

    #onFail(value){
        // promises always have asynchronously
        // setTimeout(() => {},0)
        queueMicrotask(() => {
            if(this.#state !== STATE.PENDING) return

            if(value instanceof MyPromise){
                value.then(this.#onSuccessBinded,this.#onFailureBinded)
            }
            this.#value=value
            this.#state=STATE.REJECTED
            this.#runCallbacks()
        })
        
    }
    // .then(() => {})
    // store in array because .then().then()
    // then(thenCb,catchCb){
    //     // .then(() => {},())
    //     if(thenCb!=null){
    //         this.#thenCbs.push(thenCb)
    //     }
    //     if(catchCb!=null){
    //         this.#catchCbs.push(catchCb)
    //     }
        
    //     // for multiple thens
    //     this.#runCallbacks()
    // }

    // chaining
    then(thenCb,catchCb){
        return new MyPromise((resolve,reject) => {
            this.#thenCbs.push(result => {
                // .then().catch().then() so if 1st then is executed we have to skip 2nd catch()
                if(thenCb == null){
                    resolve(result)
                    return 
                }
                try{
                    // .then(return 'hi').catch().then() hi should passs to the next then
                    resolve(thenCb(result))
                }catch(error){
                    reject(error)
                }
            })

            this.#catchCbs.push(result => {
               
                if(catchCb == null){
                    reject(result)
                    return 
                }
                try{
                     
                    resolve(catchCb(result))
                }catch(error){
                    reject(error)
                }
            })
        })
    }

    catch(cb){
        this.then(undefined,cb)
    }

    finally(cb) {
        // p.then().finally().then() if inside 1st then if we return result it will not pass to finally insted it will go to next then()
        return this.then(result => {
            // dont pass the result to the cb skip it insted return result
            cb()
            return result
        },
        result => {
            cb()
            throw result
        }
        )
    }
    static resolve(value){
        return new MyPromise((resolve) => {
            resolve(value)
        })
    }
    static reject(value){
        return new MyPromise((resolve,reject) => {
            resolve(value)
        })
    }
}
const p=new MyPromise((resolve,reject) => {
    setTimeout(() => {
        resolve('hello')
    },2000)
})
p.then((value) => {
    console.log(value)
})

// module.exports=MyPromise

// inside of our success methids we have to handle both promise and values
// p.then(() => {
    // return new Promise
//     return "hi"
// })
// .then(())