function pigLatin(e){
    e.preventDefault()
    let inputValue=document.querySelector("#inputField")
    let input=inputValue.value
    let ending="ay"
    //converting my string input into array
    let array=[]
    array=[...input]

    //index value 
    let first=array[0]
    let last=array[array.length-1]

    //swaping value
    let temp=first
    first=last
    last=temp
    
    array[0]=first
    array[array.length-1]=last

    //changing my array to string
    let stringValue=array.join('')

    let finalValue=stringValue+ending

    //result
    let result=document.querySelector("#result")
    result.innerHTML=`Your pig latin word is ${finalValue}`
}

document.querySelector("#btn").addEventListener("click",pigLatin)