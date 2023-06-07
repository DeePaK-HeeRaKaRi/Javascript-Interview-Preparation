// function findByClass(clas){
//     const root=document.body
//     console.log(root)
//     function search(node){
//         console.log('---',Array.from(node.classList), node.classList);
//         let result=[]
//         if(node.classList.contains(clas)){
//             console.log('in if',node)
//             result.push(node)
//         }

//         for(const element of node.children){
//             const res=search(element)
//             console.log('reult---',res)
//             result=result.concat(res)
//         }
//         return result
//     }
//     return search(root)
// }
function findByClass(clas){
    const root=document.body
    let queue=[root]
    let ans=[]
    while(queue.length){
        const curr=queue.shift()
        console.log('curr',curr,curr.classList)
        if(curr.classList.value == clas){
            ans.push(curr)
        }
        if(curr.children.length > 0){
            queue.push(...curr.children);
        }
    }
    return ans
}
console.log(findByClass("a"));