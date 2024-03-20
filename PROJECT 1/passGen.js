const themeBtn=document.querySelector("#theme-btn")
let displayPass=document.querySelector("#displayPass-para")
const bodyEl=document.querySelector("body")
const generateBtn=document.querySelector("#save-btn")
let generateEl=document.getElementById("generateDiv")
const paraEl1=document.querySelector("#para1")
const paraEl2=document.querySelector("#para2")
const progressEl=document.querySelector(".progress-bar")
const headingEl=document.querySelector("h1")
const copyBtn=document.querySelector("#copy-btn")
const saveBtn=document.querySelector("#save-btn")
let themeTemp=0
let arrPass=[]
let password=""
let trigger2=0

function random(min,max) //33-126
{
    return Math.floor(Math.random() * (max - min) + min);
}


function disableBtn()
{
    // margin: 10px auto;
    // display: block;
    // width:106px;
    // height: 38px;
    // border-radius: 5px;
    // border: 1px solid black;
    // background-color: white;
    generateEl.innerHTML=`<button type="button" disabled id="temp-btn">GENERATING</button>`
    let tempBtn=document.getElementById("temp-btn")
    tempBtn.style.border="1px solid black"
    // tempBtn.style.margin="10px auto"
    // tempBtn.style.display="block"
    tempBtn.style.borderRadius="20px"
    // tempBtn.style.height="38px"
    // tempBtn.style.backgroundColor="#c7c5c5"
    tempBtn.style.color="black"
}

function updateProgressBar(progress)
{
    setTimeout(function(){
        progressEl.innerHTML=`<div class="bar"></div>`
        const progressBarEl=document.querySelector(".bar")
        progressBarEl.style.width=`${progress}%`
    },70*progress)

}

function displayResult()
{
    setTimeout(function(){
        displayPass.textContent=password
        generateEl.innerHTML=generateEl.innerHTML+`<p class="temp-para">generated!</p>`
        let tempPara=document.querySelector(".temp-para")
        tempPara.style.right="450px"
        tempPara.style.width="70px"

        
    },7050)
}

//***************************************** ************************************/


themeBtn.addEventListener("click",function(){
    // displayPass.textContent="clicked"
    if (themeTemp==1) {
        bodyEl.style.color="black"
        bodyEl.style.backgroundColor="white"
        themeTemp=0
    }
    else {//themeTemp==0 dark theme
        bodyEl.style.backgroundColor="#001d3d"
        bodyEl.style.color="#ffc300"
        bodyEl.style.transition="background-color 0.6s ease , color 1.5s ease"
        displayPass.style.backgroundColor="white"
        displayPass.style.border="2px solid #ffc300"
        displayPass.style.transition="background-color 1.6s ease , border 1.6s ease"
        paraEl1.style.textShadow="0px 0px 5px black"
        paraEl2.style.textShadow="0px 0px 5px black"
        displayPass.style.color="black"
        // headingEl.style.textShadow="0px 0px 5px black"
        headingEl.style.color="#52b788"
        saveBtn.style.backgroundColor="#52b788"
        saveBtn.style.borderRadius="3px"
        saveBtn.style.textShadow="0px 0px 1px black"
        // copyBtn.style.border="4px solid #ffc300"
        themeTemp=1
    }
})


generateBtn.addEventListener("click",generatePass)
function generatePass()
{


    //disabling generate btn
    disableBtn()

    let arr=[]
    let trigger=0
    
    if (trigger==1) {
        clearBox()
        trigger=0
    }
    
    for (let i = 0; i < 8; i++) 
    {
        arr[i]=random(33,127)
    }
    
    for (let j = 0; j < 8; j++) 
    {
        let tempChar=String.fromCharCode(arr[j])
        arrPass.push(tempChar)
        
    }
    password=arrPass.join("")

    // updateProgressBar(progress)
    for (let progress = 1; progress <= 100; progress++) 
    {
        updateProgressBar(progress)
    }
    displayResult()

    trigger2=0
}

function copy()
{
    navigator.clipboard.writeText(password)
    // copyBtn.style.backgroundColor="grey"
    if (trigger2==0) {
        copyBtn.innerHTML=copyBtn.innerHTML+`<p class="temp-para">copied!</p>`
        trigger2=trigger2+1
    }

}

