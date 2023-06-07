Array.prototype.listeners={}
Array.prototype.addListener=function(eventName,cb){
     if(!this.listeners[eventName]){
        this.listeners[eventName]=[]
     }
     this.listeners[eventName].push(cb)

}
Array.prototype.pushWithEvent=function(eventName,array){
    this.push(...array)
    this.triggerEvent(eventName,array)
}
Array.prototype.triggerEvent=function(eventName,elements){
    // if the evenet is present ,trigger all the call backs associated with that event
    if(this.listeners[eventName]){
        this.listeners[eventName].forEach((cbs)=>{
            cbs(eventName,elements,this)
        })
    }
}
Array.prototype.removeListener=function(eventName,cb){
    if(this.listeners[eventName]){
        this.listeners[eventName]=this.listeners[eventName].filter((e) =>( e!==cb))
    }
}

Array.prototype.popWithEvent=function(eventName){
    const elements=this.pop()
    this.triggerEvent(eventName,elements)
}
const arr=[]
const onAdd=(eventName,items,array)=>{
    console.log('items were added',items)
}
const onAddAgain=(eventName,items,array)=>{
    console.log('items were added',items)
}
const remove=(eventName,item,array)=>{
    console.log(item, ' was removed ')
}
arr.addListener('add',onAdd)
arr.addListener('add',onAddAgain)
arr.addListener('remove',remove)

arr.pushWithEvent('add',[1,2,3,'a','b'])
arr.removeListener('add',onAddAgain)
arr.pushWithEvent('add',[4,5])
arr.popWithEvent('remove')
arr.pushWithEvent('add',[{"name":"deepak"},"helo"])
arr.popWithEvent('remove')
console.log(arr.listeners)
console.log(arr)