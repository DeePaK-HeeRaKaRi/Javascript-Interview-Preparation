function foo(){
    if(new.target){
        console.log('Called with new Keyword-as constructor')
    }
    else{
        console.log('Called withot new keyword-normal function invocation')
    }
}
foo()
let t=new foo()