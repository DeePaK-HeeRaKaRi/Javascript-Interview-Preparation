// [section,p:nth-child(1),span:nth-child(1),button:nth-child(2)]
const cssSelector=(root,target) => {
    const selectors=[]
    while(root!=target){
        const nthChild=Array.from(target.parentNode.children).indexOf(target) + 1 // nth will start from 1
        // console.log("nthChild-----", nthChild, target.parentNode.children);
        const selector = `${target.tagName.toLowerCase()}:nth-child(${nthChild})`;
        // console.log(selector)
        selectors.unshift(selector)
        target = target.parentNode;
        // console.log('target',target)
    }
    const selector=`${root.tagName.toLowerCase()}[id="${target.id}"]`
    selectors.unshift(selector);
    return selectors.join(' > ')
}
const root=document.getElementById('root')
const target=document.getElementById('target')
console.log(cssSelector(root,target))