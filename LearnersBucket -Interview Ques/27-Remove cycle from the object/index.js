const replacer=()=>{
    const store=new WeakSet()
    return (key,value)=>{
        console.log({ key, value });
        if(typeof value==='object' && value!=null){
            if(store.has(value)){
                return 
            }
            store.add(value)
            // console.log('store---',store)
        }
        return value
    }
 
}

// {"val":10,"next":{"val":20,"next":{"val":30,"next":{"val":40,"next":{"val":50,next:"item1Refre"}}}}}
// {"val":10,next:{list}}
const removeCycle=(obj)=>{
    const store=new WeakSet([obj])
    console.log('store',store)
    
    function iterable(obj){
       for(let key in obj){
        console.log("keys----", key, obj[key]);
        if(obj.hasOwnProperty(key)){
            if(typeof obj[key]==='object'){
                console.log('object----',obj[key],store)
                if(store.has(obj[key])){
                    obj[key]=null
                }else{
                  console.log("else", obj[key]);
                //   iterable(obj[key].next);

                  // if item5.next=null than you should not call next alredy it is not an cycle
                  if (obj[key]) {
                    iterable(obj[key].next);
                  } else {
                    console.log("having null in next");
                    return;
                  }
                }
            }else{
                iterable(obj[key].next);
                console.log("not an object",obj[key])
            }
        }
       }
    }
    iterable(obj)
}
 

const List=function(val){
    this.val=val
    this.next=null
}
const item1=new List(10)
const item2=new List(20)
const item3=new List(30)
const item4=new List(40)
const item5=new List(50)

item1.next=item2
item2.next=item3
item3.next=item4
item4.next=item5
item5.next=item1

// console.log('item',item1)
// removeCycle(item1)
 
// console.log(JSON.stringify(item1))
// get error because it is a cycle
// console.log(JSON.stringify(item1))

// {"val":10,"next":{"val":20,"next":{"val":30,"next":{"val":40,"next":{"val":50}}}}}
console.log(JSON.stringify(item1,replacer()))


 