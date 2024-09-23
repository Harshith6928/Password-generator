let button = document.getElementById("button");
let h2 = document.getElementById("h2");

button.onclick = function(){

    const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
    const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const symbols = '~!@#$%^&*()_-+=?><:;';

    let lenght = 12;
    let allowedChars = '';
    let password = '';

    let includeLowerChars = true;
    let includeUpperChars = true;
    let includeNumber = true;
    let spclChars = true;

    allowedChars += includeLowerChars ? lowerChars : '';
    allowedChars += includeUpperChars ? upperChars : '';
    allowedChars += includeNumber ? numberChars : '';
    allowedChars += spclChars ? symbols : '';

    for(let i = 1; i <= lenght; i++){
        let randomNum = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomNum];
    }

    h2.textContent = `Generated password : ${password}`
    
    
}

