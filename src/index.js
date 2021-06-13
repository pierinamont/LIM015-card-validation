import validator from './validator.js';
// console.log(validator); 

const startContent = document.getElementsByClassName('home-container');
const showInfoContent = document.getElementsByClassName('show-info-container');
const infoContent = document.getElementsByClassName('info-container');
const showHeader = document.getElementsByClassName('header');
const showFooter = document.getElementsByClassName('footer');
const infoContainer = document.getElementsByClassName('info-container');
const showCardContent = document.getElementsByClassName('card-valid-container');
const showInfoContainer = document.getElementsByClassName('show-info-container');
const cardBody = document.getElementById('card-body');
const visa = document.getElementById('visa');
const mastercard = document.getElementById('mastercard');
const americanexpress = document.getElementById('americanexpress');

// Función de botón para iniciar 
document.getElementById('startbtn').addEventListener('click', start);
function start() {
  for (let i = 0; i < startContent.length; i++) {
    startContent[i].style.display = 'none';
  }
  for (let i = 0; i < infoContent.length; i++) {
    infoContent[i].style.display = 'block';
  }
}

// Click en header img
document.getElementById('header-img').addEventListener('click', headerImg);
document.getElementById('back-btn').addEventListener('click', headerImg);
function headerImg() {

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

// Función de botón de información 
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

// Función de botón para ir a validar tarjeta 
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

// Función de botón para ir a validar tarjeta
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
  function justNumbers(k) {
    const key = k.keyCode || k.which;
    if (key >= 48 && key <= 57) {
      return true;
    } else {
      alert('Ingresar solo números');
      return false;
    }
  }
  if (!justNumbers(e)) {
    e.preventDefault();
  }
}

// SOBREESCRIBIR EL INPUT A TARJETA
document.getElementById('inputCard').addEventListener('keyup', cardText);
function cardText() {
  const inputCard = document.getElementById('inputCard').value;
  document.getElementById('card-input').value = inputCard;
}

// FORMULA DE LUHN
document.getElementById('cardbtn').addEventListener('click', getNumber);
function getNumber() {
  // (1) Obtener input y colocarlo en reversa
  const inputCard = document.getElementById('inputCard').value; 
  const totalValidator = validator.isValid(inputCard);
  console.log(totalValidator);
}

// MASKIFY
document.getElementById('inputCard').addEventListener('keypress', maskify); 

function maskify() {
  const inputCard = document.getElementById('inputCard').value;
  let newInput = validator.maskify(inputCard);
  console.log(newInput); 
  //document.getElementById('inputCard').value = newInput;
  
}

// Marca de tarjetas para 
document.getElementById('inputCard').addEventListener('keypress', brands); 
function brands() {
    const inputCard = document.getElementById('inputCard').value;
      // visa
      if (inputCard.slice(0) == 4) {
        mastercard.style.display = 'none';
        americanexpress.style.display = 'none';
        visa.style.display = 'block';
        cardBody.style.background ='#013777';
      } 
      // mastercard
      if (inputCard.slice(0, 1) >= 51 && inputCard.slice(0, 1) <= 57) {
        visa.style.display = 'none';
        americanexpress.style.display = 'none';
        mastercard.style.display = 'block';
        cardBody.style.background ='#05712c';
      }
      // americanexpress
      if (inputCard.slice(0) == 3) {
        visa.style.display = 'none';
        mastercard.style.display = 'none';
        americanexpress.style.display = 'block';
        cardBody.style.background ='#9f9f9c';
      }

      if (inputcard.length === false) {
        cardBody.style.background ='#DD5E57';
        visa.style.display = 'none';
        mastercard.style.display = 'none';
      }
}

