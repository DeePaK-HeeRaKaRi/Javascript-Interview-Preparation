const getAllattributes=(node) =>{
    let attr={}
 
    let classAttr =node.attributes.class
  
    // console.log('-----',classAttr);
    if (classAttr && classAttr.nodeName.length > 0) {
      attr[classAttr.nodeName] = classAttr.nodeValue;
    }
    

    let idAttr=node.attributes.id 
    // console.log("---id", idAttr);
    if (idAttr && idAttr.nodeName.length > 0) {
      attr[idAttr.nodeName] = idAttr.nodeValue;
    };
 

    console.log(attr)
    return attr
}
const HTMLToJSON=(node)=>{
    let output={}
    // console.log(node.localName)
    let type=node.localName
    let children = node.innerText
 
    if(node.children.length>0){
      
        children = []
        for(let child of node.children){
            children.push(HTMLToJSON(child));
        }
    }
    let props = getAllattributes(node)
    output['type'] = type
    // console.log(props)

    if(props.class || props.id){
        output['props'] = props
    }
    output['children'] = children
    // console.log(output)
    return output
}
const node=document.getElementById('foo')
let res=HTMLToJSON(node)
console.log(JSON.stringify(res))