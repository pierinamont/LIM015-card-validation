import validator from './validator.js';
//console.log(validator); 

const startContent = document.getElementsByClassName('home-container');
const showInfoContent = document.getElementsByClassName('show-info-container');
const infoContent = document.getElementsByClassName('info-container');
const showHeader = document.getElementsByClassName('header');
const showFooter = document.getElementsByClassName('footer');
const infoContainer = document.getElementsByClassName('info-container');
const showCardContent = document.getElementsByClassName('card-valid-container');
const showInfoContainer = document.getElementsByClassName('show-info-container');

//Función de botón para iniciar 
document.getElementById('startbtn').addEventListener('click', start);
function start() {
    for (let i = 0; i < startContent.length; i++) {
        startContent[i].style.display = 'none';
    }
    for (let i = 0; i < infoContent.length; i++) {
        infoContent[i].style.display = 'block';
    }
}

//Click en header img
document.getElementById('header-img').addEventListener('click', headerImg);
document.getElementById('back-btn').addEventListener('click', headerImg);
function headerImg() {
    const infoContent = document.getElementsByClassName('info-container');
    for (let i = 0; i < infoContent.length; i++) {
        infoContent[i].style.display = 'block';
    }
    for (let i = 0; i < showInfoContent.length; i++) {
        showInfoContent[i].style.display = 'none';
    }
    for (let i = 0; i < showCardContent.length; i++) {
        showCardContent[i].style.display = 'none';
    }
     for (let i = 0; i < showHeader.length; i++) {
        showHeader[i].style.display = 'none';
    }
    for (let i = 0; i < showFooter.length; i++) {
        showFooter[i].style.display = 'none';
    }
}

//Función de botón de información 
document.getElementById('infobtn').addEventListener('click', showInfo);
function showInfo() {
    for (let i = 0; i < showInfoContent.length; i++) {
        showInfoContent[i].style.display = 'block';
    }
    for (let i = 0; i < infoContent.length; i++) {
        infoContent[i].style.display = 'none';
    }
    for (let i = 0; i < showHeader.length; i++) {
        showHeader[i].style.display = 'block';
    }
    for (let i = 0; i < showFooter.length; i++) {
        showFooter[i].style.display = 'block';
    }
}

//Función de botón para ir a validar tarjeta 
document.getElementById('validbtn').addEventListener('click', showCard);
function showCard() {
    for (let i = 0; i < infoContainer.length; i++) {
        infoContainer[i].style.display = 'none';
    }
    for (let i = 0; i < showCardContent.length; i++) {
        showCardContent[i].style.display = 'block';
    }
    for (let i = 0; i < showHeader.length; i++) {
        showHeader[i].style.display = 'block';
    }
    for (let i = 0; i < showFooter.length; i++) {
        showFooter[i].style.display = 'block';
    }
}

//Función de botón para ir a validar tarjeta
document.getElementById('validbutton').addEventListener('click', displayCard);
function displayCard() {
    for (let i = 0; i < showInfoContainer.length; i++) {
        showInfoContainer[i].style.display = 'none';
    }
    for (let i = 0; i < showCardContent.length; i++) {
        showCardContent[i].style.display = 'block';
    }
    for (let i = 0; i < showHeader.length; i++) {
        showHeader[i].style.display = 'block';
    }
    for (let i = 0; i < showFooter.length; i++) {
        showFooter[i].style.display = 'block';
    }
}

// Permitir colocar solo números en el input text
document.getElementById('inputCard').addEventListener('keypress', convert);
function convert(e) { 
    function justNumbers(e) {
        let key = e.keyCode || e.which;
        if(key >= 48 && key <= 57) {
            return true;
        } else {
            alert('Ingresar solo números');
            return false;
        }
    }
    if(!justNumbers(e)) {
        e.preventDefault();
    }
}

// SOBREESCRIBIR EL INPUT A TARJETA
document.getElementById('inputCard').addEventListener('keyup', cardText);
function cardText() {
    const inputCard = document.getElementById('inputCard').value; 
    document.getElementById('card-input').value = inputCard
}

// FORMULA DE LUHN
document.getElementById('cardbtn').addEventListener('click', getNumber);
function getNumber() {
    //(1) Obtener input y colocarlo en reversa
   const inputCard = document.getElementById('inputCard').value; 
   let totalValidator = validator.isValid(inputCard);
   console.log(totalValidator);
}

// MASKIFY

document.getElementById('inputCard').addEventListener('keypress', maskify); // onchange

function maskify() {
    const inputCard = document.getElementById('inputCard').value;
    let hideText = validator.maskify(inputCard);
    console.log(hideText);
    //return hideText.innerHTML;
}

 /*
   let hideNum = reverseInput.map((num, i) => {
       if (i < (num.length - 4)) {
            return '#';
       } else {
           return num;
       }
    }); 
    console.log(hideNum);
    */
/**let //(3) Las posiciones pares se multiplican * 2
    let newArray = reverseInput.map(Number);
    newArray = newArray.map((num, i) => {
        if (i % 2 === 1) {
            return num*2;
        } else {
            return num;
        }
    });
    
    //(4) Sumar el resultado si es mayor o igual a 10
    newArray = newArray.map((num) => {
    if(num >= 10) {
        return num -= 9;
        } else {
            return num;
        }
    });
    console.log(newArray);

    //(5) Sumar todos los números
    newArray = newArray.reduce((previus, next) => {
        let sum = previus + next;
        return sum
    });

    validator.isValid(newArray); */