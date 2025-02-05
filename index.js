const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"] 

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

let placeholderOne = document.getElementById("placeholder-one")
let placeholderTwo = document.getElementById("placeholder-two")
let lengthInput = document.getElementById("length-input")
let lengthValue = document.getElementById("length-value")

function updateLength() {
    const lengthInput = document.getElementById("length-input");
    const lengthValue = document.getElementById("length-value");
    lengthValue.textContent = lengthInput.value;
}


function getPW(){
    
    let availablePw = letters.join('');
    
    if (document.getElementById("enable-numbers").checked) {
        availablePw += numbers.join('');
    }
    if (document.getElementById("enable-symbols").checked) {
        availablePw += symbols.join('');
    }  
    
    let pw1 = ""
    let pw2 = ""
    let pwLength = parseInt(lengthInput.value)
    
    for (let i=0; i < pwLength; i++){
        
    let randomPW1 = Math.floor(Math.random()* availablePw.length)
    let randomPW2 = Math.floor(Math.random()* availablePw.length)
    
    pw1 += availablePw[randomPW1]
    pw2 += availablePw[randomPW2]  
    }
    
    placeholderOne.textContent = pw1
    placeholderTwo.textContent = pw2

}

function copyText(element){
    navigator.clipboard.writeText(element.textContent)
    .then(() => {
        alert("You copied your password!" + element.textContent);
    })
    .catch (err=> {
        console.error("Failed to copy: ", err);
    })
}



