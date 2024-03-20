let num1p1=document.getElementById("num1p1")
let num1p2=document.getElementById("num1p2")
let num2p1=document.getElementById("num2p1")
let num2p2=document.getElementById("num2p2")
let resultVar=document.getElementById("result")
let trigger=0
let n1=""
let n2=""

// backdrop-filter: blur(10px);
// background-color: rgba(0, 0, 0,0);
function next()
{
    trigger=trigger+1
    if (trigger>3) 
    {
        trigger=0    
    }
    if (trigger==0) {
        num1p1.style.backgroundColor="rgb(52, 49, 49rgba(0, 0, 0,0)"
        num1p2.style.backgroundColor="rgba(0, 0, 0,0)"
        num2p1.style.backgroundColor="rgba(0, 0, 0,0)"
        num2p2.style.backgroundColor="rgba(0, 0, 0,0)"

    }    
    else if(trigger==1)
    {
        num1p1.style.backgroundColor="rgba(0, 0, 0,0)"
        num1p2.style.backgroundColor="rgb(52, 49, 49)"
        num2p1.style.backgroundColor="rgba(0, 0, 0,0)"
        num2p2.style.backgroundColor="rgba(0, 0, 0,0)"

    }
    else if(trigger==2)
    {
        num1p1.style.backgroundColor="rgba(0, 0, 0,0)"
        num1p2.style.backgroundColor="rgba(0, 0, 0,0)"
        num2p1.style.backgroundColor="rgb(52, 49, 49)"
        num2p2.style.backgroundColor="rgba(0, 0, 0,0)"


    }
    else if(trigger==3)
    {
        num1p1.style.backgroundColor="rgba(0, 0, 0,0)"
        num1p2.style.backgroundColor="rgba(0, 0, 0,0)"
        num2p1.style.backgroundColor="rgba(0, 0, 0,0)"
        num2p2.style.backgroundColor="rgb(52, 49, 49)"

    }
    
}

function noClick(x)
{        
    if (trigger==0) 
    {
        for (let i = 0; i<10; i++) {
            
            if (x==i) {
                num1p1.textContent=i
                break
                
            }
        }
    }
    else if(trigger==1)
    {
        for (let i = 0; i<10; i++) {
            
            if (x==i) {
                num1p2.textContent=i
                break
                
            }
        }
    }
    else if(trigger==2)
    {
        for (let i = 0; i<10; i++) {
            
            if (x==i) {
                num2p1.textContent=i
                break
            }
        }
    }
    else if(trigger==3)
    {
        for (let i = 0; i<10; i++) {
            
            if (x==i) {
                num2p2.textContent=i
                break
                
            }
        }
    }

    properNums()
}

function clearNum()
{
    trigger=0

    num1p1.style.backgroundColor="rgb(52, 49, 49)"
    num1p2.style.backgroundColor="rgba(0, 0, 0,0)"
    num2p1.style.backgroundColor="rgba(0, 0, 0,0)"
    num2p2.style.backgroundColor="rgba(0, 0, 0,0)"

    num1p1.textContent=0
    num1p2.textContent=0
    num2p1.textContent=0
    num2p2.textContent=0
}
function clearResult()
{
    resultVar.textContent="Result:"
}

function properNums()
{
    n1=num1p1.textContent.toString()+num1p2.textContent.toString()
    n2=num2p1.textContent.toString()+num2p2.textContent.toString()
}
function add()
{
    clearResult()
    tempResult=Number(n1)+Number(n2)
    resultVar.textContent=resultVar.textContent+tempResult
}
function substract()
{
    clearResult()
    tempResult=Number(n1)-Number(n2)
    resultVar.textContent=resultVar.textContent+tempResult
}
function multiply()
{
    clearResult()
    tempResult=Number(n1)*Number(n2)
    resultVar.textContent=resultVar.textContent+tempResult
}
function divide()
{
    clearResult()
    tempResult=Number(n1)/Number(n2)
    resultVar.textContent=resultVar.textContent+tempResult
}
