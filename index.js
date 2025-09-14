const charactersLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const charactersNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const charactersSymbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

const charactersLettersAndNumbers = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1", "2", "3", "4", "5", "6", "7", "8", "9"];

const charactersLettersAndSymbols = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?", "/"];

const charactersAll = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let passwordOneEl = document.getElementById("passwordOne")
let passwordTwoEl = document.getElementById("passwordTwo")
let passwordOne = " "
let passwordTwo = " "
let passwordLengthEl = document.getElementById("passwordLength")
let numbersEL = document.getElementById("numbersSwitch")
let symbolsEL = document.getElementById("symbolsSwitch")
let passwordMessage = document.getElementById("passwordMessage")
let passwordEl = document.getElementById("password")

function randomPassword() {
    passwordMessage.textContent = " "
    let passwordOne = " "
    let passwordTwo = " "
    if (numbersEL.checked===true && symbolsEL.checked===false) {
        for (let i = 0; i < passwordLengthEl.value; i++) {
            passwordOne += charactersLettersAndNumbers[ Math.floor( Math.random() * charactersLettersAndNumbers.length ) ]
        }
        passwordOneEl.textContent = passwordOne

        for (let i = 0; i < passwordLengthEl.value; i++) {
        passwordTwo += charactersLettersAndNumbers[ Math.floor( Math.random() * charactersLettersAndNumbers.length ) ]
    }
        passwordTwoEl.textContent = passwordTwo

    } else if (numbersEL.checked===false && symbolsEL.checked===true) {
        for (let i = 0; i < passwordLengthEl.value; i++) {
            passwordOne += charactersLettersAndSymbols[ Math.floor( Math.random() * charactersLettersAndSymbols.length ) ]
        }
        passwordOneEl.textContent = passwordOne

        for (let i = 0; i < passwordLengthEl.value; i++) {
        passwordTwo += charactersLettersAndSymbols[ Math.floor( Math.random() * charactersLettersAndSymbols.length ) ]
    }
    passwordTwoEl.textContent = passwordTwo

} else if (numbersEL.checked===false && symbolsEL.checked===false) {
    for (let i = 0; i < passwordLengthEl.value; i++) {
        passwordOne += charactersLetters[ Math.floor( Math.random() * charactersLetters.length ) ]
    }
    passwordOneEl.textContent = passwordOne

        for (let i = 0; i < passwordLengthEl.value; i++) {
        passwordTwo += charactersLetters[ Math.floor( Math.random() * charactersLetters.length ) ]
    }
    passwordTwoEl.textContent = passwordTwo

} else {
    for (let i = 0; i < passwordLengthEl.value; i++) {
        passwordOne += charactersAll[ Math.floor( Math.random() * charactersAll.length ) ]
    }
    passwordOneEl.textContent = passwordOne
    
        for (let i = 0; i < passwordLengthEl.value; i++) {
        passwordTwo += charactersAll[ Math.floor( Math.random() * charactersAll.length ) ]
    }
    passwordTwoEl.textContent = passwordTwo
}
}

function copyPasswordOne() {
    passwordMessage.textContent = ""
    let copyText = document.getElementById("passwordOne").textContent;
    navigator.clipboard.writeText(copyText);
    let passwordEl = document.getElementById("password");
    return passwordEl.textContent = 12
    //passwordMessage.textContent = copyText + " has been copied to the clipboard!"
    //password.textContent = "hi";
}

function copyPasswordTwo() {
    if (passwordTwoEl.textContent === "") {
         passwordMessage.textContent = "Please generate a password first!"
    } else {
        let copyText = document.getElementById("passwordTwo").textContent;
        copyText.style.cssText = 'background-color: green; border: 1px solid black;';
        navigator.clipboard.writeText(copyText);  
        passwordMessage.textContent = copyText + " has been copied to the clipboard!";
    }
}
