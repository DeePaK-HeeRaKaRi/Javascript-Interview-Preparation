// const Store=function(){
//     this.list={}
//     this.set=(k,v)=>{
//         if(this.list.hasOwnProperty(k)){
//             this.list[k].push(v)
//         }else{
//             this.list[k]=[v]
//         }
//     }
//     this.get=(k)=>{
//         return this.list[k]
//     }
//     this.has=(k)=>{
//         return this.list[k] ? true :false
//     }
//     this.obj=()=>{
//         return this.list
//     }
// }
class Store{
    constructor(){
        this.list={}
    }
    set(k,v){
        if(this.list.hasOwnProperty(k)){
            this.list[k].push(v)
        }else{
            this.list[k]=[v]
        }
    }

    get(k){
        return this.list[k]
    }
    has(k){
        return this.list[k] ? true :false
    }

    obj(){
        return this.list
    }
}
const store=new Store()
store.set('a',1)
store.set('b',2)
store.set('c',3)
store.set('c',4)
console.log(store.get('c'))
console.log(store.has('b'))
console.log(store.obj())