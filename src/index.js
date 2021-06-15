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
const cardbtn = document.getElementById('cardbtn');
const newCardbtn = document.getElementById('new-cardbtn');
const visa = document.getElementById('visa');
const mastercard = document.getElementById('mastercard');
const americanexpress = document.getElementById('americanexpress');
const dinersClub = document.getElementById('diners-club');
const alertContainer = document.getElementsByClassName('alert-container');
const valid = document.getElementsByClassName('valid');
const noValid = document.getElementsByClassName('no-valid');

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

  document.getElementById('inputCard').value = "";
  cardbtn.style.display = 'block';
  newCardbtn.style.display = 'none';

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
  for (let i = 0; i < alertContainer.length; i++) {
    alertContainer[i].style.display = 'none';
  }
  for (let i = 0; i < alertContainer.length; i++) {
    alertContainer[i].style.display = 'none';
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

// Sobreescribir el input a la tarjeta
document.getElementById('inputCard').addEventListener('keyup', cardText);
function cardText() {
  const inputCard = document.getElementById('inputCard').value;
  document.getElementById('card-input').value = inputCard;
  document.getElementById('card-input').disabled = true; 
}

// Fórmula de Luhn
document.getElementById('cardbtn').addEventListener('click', getNumber);
function getNumber() {
  // (1) Obtener input y colocarlo en reversa
  const inputCard = document.getElementById('inputCard').value; 
  const totalValidator = validator.isValid(inputCard);
  console.log(totalValidator);
  
  // Botón de nueva validación 
    cardbtn.style.display = 'none';
    newCardbtn.style.display = 'block';
    
  // Alert que indica la validez de la tarjeta
  for (let i = 0; i < alertContainer.length; i++) {
    if (totalValidator === true) {
      alertContainer[i].style.display = 'block';
      noValid[i].style.display = 'none';
      valid[i].style.display = 'block';
      
    } else {
      alertContainer[i].style.display = 'block';
      noValid[i].style.display = 'block';
      valid[i].style.display = 'none';
      
    }
  }
}

// Función para Maskify
document.getElementById('inputCard').addEventListener('keypress', maskify); 

function maskify() {
  const inputCard = document.getElementById('inputCard').value;
  const newValue = validator.maskify(inputCard);
  console.log(newValue); 
  // document.getElementById('inputCard').value =  newValue; 
  // document.getElementById('inputCard').innerHTML =  newValue; 
}

// Limpiar el input
newCardbtn.addEventListener('click', clean);
function clean() {  
  document.getElementById('card-input').value = "";
  document.getElementById('inputCard').value = "";
  cardbtn.style.display = 'block';
  newCardbtn.style.display = 'none';
  cardBody.style.background ='#DD5E57';
  visa.style.display = 'none';
  mastercard.style.display = 'none';
  americanexpress.style.display = 'none';

  for (let i = 0; i < alertContainer.length; i++) {
    alertContainer[i].style.display = 'none';
  }

}

// Marca de tarjetas 

document.getElementById('inputCard').addEventListener('keypress', brands); 
function brands() {
    const inputCard = document.getElementById('inputCard').value;
      // visa
      if (inputCard.slice(0) == 4) {
        mastercard.style.display = 'none';
        americanexpress.style.display = 'none';
        visa.style.display = 'block';
        cardBody.style.background = '#013777';
      }
       // americanexpress
       if (inputCard[0] == 3 && inputCard[1] == 4) {
        visa.style.display = 'none';
        mastercard.style.display = 'none';
        dinersClub.style.display = 'none';
        americanexpress.style.display = 'block';
        cardBody.style.background ='#5e5c5f';
      } else if (inputCard[0] == 3 && inputCard[1] == 7 ) {
        visa.style.display = 'none';
        mastercard.style.display = 'none';
        dinersClub.style.display = 'none';
        americanexpress.style.display = 'block';
        cardBody.style.background ='#5e5c5f';
      }
      // mastercard - corregir
      if (inputCard[0] == 5 && inputCard[1] == 1) {
        visa.style.display = 'none';
        americanexpress.style.display = 'none';
        dinersClub.style.display = 'none';
        mastercard.style.display = 'block';
        cardBody.style.background ='#233d4f';
      } else if (inputCard[0] == 5 && inputCard[1] == 2) {
        visa.style.display = 'none';
        americanexpress.style.display = 'none';
        dinersClub.style.display = 'none';
        mastercard.style.display = 'block';
        cardBody.style.background ='#233d4f';
      } else if (inputCard[0] == 5 &&  inputCard[1] == 3) {
        visa.style.display = 'none';
        americanexpress.style.display = 'none';
        dinersClub.style.display = 'none';
        mastercard.style.display = 'block';
        cardBody.style.background ='#233d4f';
      }  else if (inputCard[0] == 5 && inputCard[1] == 4) {
        visa.style.display = 'none';
        americanexpress.style.display = 'none';
        dinersClub.style.display = 'none';
        mastercard.style.display = 'block';
        cardBody.style.background ='#233d4f';
      } else if (inputCard[0] == 5 && inputCard[1] == 5) {
        visa.style.display = 'none';
        americanexpress.style.display = 'none';
        dinersClub.style.display = 'none';
        mastercard.style.display = 'block';
        cardBody.style.background ='#233d4f';
      }
      // diners club
      if (inputCard[0] == 3 && inputCard[1] == 6) {
        visa.style.display = 'none';
        mastercard.style.display = 'none';
        americanexpress.style.display = 'none';
        dinersClub.style.display = 'block';
        cardBody.style.background ='#aaadac';
      }
       // tarjeta se queda con el color original
      if (inputCard.length === 0) {
        cardBody.style.background ='#DD5E57';
        visa.style.display = 'none';
        mastercard.style.display = 'none';
        americanexpress.style.display = 'none';
        dinersClub.style.display = 'none';
      }
      
}

