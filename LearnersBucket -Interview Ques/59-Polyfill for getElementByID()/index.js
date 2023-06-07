function getElementById(id){
    const root=document.body
    const queue=[root]
    let result=[]
    while(queue.length > 0){
        const currElement = queue.shift()
        console.log(currElement.id, currElement.children);
        if(currElement.id===id){
            console.log('if id becomes same',currElement);
            result.push(currElement);
        }
        if (currElement.children.length>0) {
          queue.push(...currElement.children);
        }
    }
    return result
}
console.log(getElementById('a'));
