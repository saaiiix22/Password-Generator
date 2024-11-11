

const passwordBox = document.querySelector("#passwordBox")
const generateBtn = document.querySelector("#generate")
const copyBtn = document.querySelector("#copy")
const genLength = 17

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const num = "0123456789"
const chars = "!@#$%^&*()_+~|}{[]<>/-="

const totalChars =  upperCase + lowerCase + num + chars
// console.log(totalChars);

generateBtn.addEventListener("click" ,()=>{ 

    let password = ""

    // password += upperCase[Math.floor(Math.random()*upperCase.length)]
    // password += lowerCase[Math.floor(Math.random()*lowerCase.length)]
    // password += num[Math.floor(Math.random()*num.length)]
    // password += chars[Math.floor(Math.random()*chars.length)]

    while(genLength > password.length){
        password += totalChars[Math.floor(Math.random()*totalChars.length)]
    }
    passwordBox.value = password
})

copyBtn.addEventListener("click",()=>{
    passwordBox.select()
    document.execCommand("copy")
})

