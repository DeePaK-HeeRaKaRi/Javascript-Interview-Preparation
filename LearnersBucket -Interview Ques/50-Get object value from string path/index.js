const get=(obj,path)=>{
    if(path==='' || path.length==0){
        return "not available in given object"
    }
    if(Array.isArray(path)){
        path=path.join('.')
    }
    // [""]
    if(path.length==0){
        return "not available in given object"
    }
    let exactPath=[]
    for(let i=0;i<path.length;i++){
        if(path[i]!=='[' && path[i]!==']' && path[i]!=='.' && path[i]!=='-'){
            exactPath.push(path[i])
        }
    }
    console.log(exactPath)

    const result=exactPath.reduce((prev,curr)=>{
        prev=prev[curr]
        return prev
    },obj)
    return result ? result : "not available in given object"
}
const obj = {
    a: {
        b: {
            c: [1,2,3]
        }
    }
};
console.log(get(obj, 'a.b.c'));
console.log(get(obj, 'a.b.c.0'));
console.log(get(obj, 'a.b.c[1]'));
console.log(get(obj, ['a', 'b', 'c', '2']));
console.log(get(obj, 'a.b.c[9]'));
console.log(get(obj,""))
console.log(get(obj,[""]))