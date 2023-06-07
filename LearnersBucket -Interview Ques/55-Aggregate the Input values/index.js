 
const aggregrateValues=(id)=>{
    const parentElement = document.querySelector(`#${id}`)
    const elements = parentElement.querySelectorAll('input[type=text]');
    // return Array.from(elements)
    const arr=Array.from(elements)
    const result=arr.reduce((prev,curr) => {
        let currNameValues=curr.name.split('.')
        let temp=prev
        currNameValues.forEach((value,index) => {
            if(!(value in temp)){
                temp[value]={}
            }
            if(index == currNameValues.length-1) {
                temp[value] = curr.value
            }

            temp=temp[value]
        })
        return prev
    },{})
    return result

}
console.log(aggregrateValues('parent'))