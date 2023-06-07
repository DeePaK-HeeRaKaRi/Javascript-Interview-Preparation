// Singleton is a design pattern that tells us that we can create only one instance of a class and that instance can be accessed globally.
// ex - redux, state management globally

const singleTon=(function(){
    function ProcessManager(name){
        this.numProcess=0
        this.name=name
    }
    let pManager
    function createProcessManager(name){
        console.log('only once')
        pManager = new ProcessManager(name)
        return pManager
    }

    return{
        getProcessmanager:(name)=>{
            if(!pManager){
                pManager=new createProcessManager(name) //it will run once
            }
            return pManager
        }
    }
})()

const p1=singleTon.getProcessmanager("deepak")
const p2=singleTon.getProcessmanager("kumar")
console.log(p1,p2)
console.log(p1===p2)