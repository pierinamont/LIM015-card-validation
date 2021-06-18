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
//const inputCard = document.getElementById('inputCard').value;

// BOTÓN PARA INICIAR
function start() {
  for (let i = 0; i < startContent.length; i++) {
    startContent[i].style.display = 'none';
  }
  for (let i = 0; i < infoContent.length; i++) {
    infoContent[i].style.display = 'block';
  }
}
document.getElementById('startbtn').addEventListener('click', start);

// CLICK EN HEADER IMG Y BOTÓN "ATRÁS"
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

// BOTÓN "INFORMACIÓN"
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

// BOTÓN PARA IR A VALIDAR TARJETA (PANTALLA PRINCIPAL)
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

// BOTÓN PARA IR A VALIDAR TARJETA (PANTALLA INFORMACIÓN)
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

// PERMITIR SOLO NÚMEROS EN EL INPUT TEXT
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

// FRANQUICIA DE TARJETAS
document.getElementById('inputCard').addEventListener('keypress', brandCard); 
function brandCard() {
  const inputCard = document.getElementById('inputCard').value;
  validator.getBrandCard(inputCard);

  if(validator.getBrandCard(inputCard) == 'Visa') {
    mastercard.style.display = 'none';
    americanexpress.style.display = 'none';
    dinersClub.style.display = 'none';
    cardBody.style.background = '#013777';
    visa.style.display = 'block';
  } else if(validator.getBrandCard(inputCard) == 'MasterCard') {
    americanexpress.style.display = 'none';
    visa.style.display = 'none';
    mastercard.style.display = 'block';
    dinersClub.style.display = 'none';
    cardBody.style.background ='#233d4f';
  } else if (validator.getBrandCard(inputCard) == 'American Express') {
    visa.style.display = 'none';
    mastercard.style.display = 'none';
    dinersClub.style.display = 'none';
    americanexpress.style.display = 'block';
    cardBody.style.background ='#5e5c5f';
  } else if(validator.getBrandCard(inputCard) == 'Diners Club Inter') {
    visa.style.display = 'none';
    mastercard.style.display = 'none';
    americanexpress.style.display = 'none';
    dinersClub.style.display = 'block';
    cardBody.style.background ='#aaadac';
  }
 
}

// FÓRMULA DE LUHN
document.getElementById('cardbtn').addEventListener('click', getNumber);
function getNumber() {
const inputCard = document.getElementById('inputCard').value;

//document.getElementById('card-input').value = validator.isValid(inputCard);
  // Obtener input y colocarlo en reversa
  console.log(inputCard);
  const totalValidator = validator.isValid(inputCard);
  console.log(totalValidator);

  // Botón de nueva validación 
  cardbtn.style.display = 'none';
  newCardbtn.style.display = 'block';

  // Ocultar input y texto
  document.getElementById("inputCard").style.display = "none";
  document.getElementById('card-text').style.display = "none";

  // Mostrar imagen
  document.getElementById('card-img').style.display = "inline-block";
  
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


// MASKIFY
document.getElementById('inputCard').addEventListener('keypress', maskify); 
function maskify() {
  const inputCard = document.getElementById('inputCard').value;
  // input text
  const finalValue = validator.maskify(inputCard); 
  console.log(finalValue); // no aparece nada 
  //document.getElementById('inputCard').value = validator.maskify(inputCard); 
  // visualizar input text en la tarjeta 
  
  document.getElementById('card-input').value = validator.maskify(inputCard); 
  document.getElementById('card-input').disabled = true; 
  
}



// LIMPIAR EL INPUT 
newCardbtn.addEventListener('click', clean);
function clean() {  
  document.getElementById('card-input').value = "";
  document.getElementById('inputCard').value = "";
  document.getElementById('card-img').style.display = "none";
  document.getElementById('inputCard').style.display = "inline-block";
  document.getElementById('card-text').style.display = "block";
  
  cardbtn.style.display = 'block';
  newCardbtn.style.display = 'none';
  cardBody.style.background ='#DD5E57';
  visa.style.display = 'none';
  mastercard.style.display = 'none';
  americanexpress.style.display = 'none';
  dinersClub.style.display = 'none';
  
  for (let i = 0; i < alertContainer.length; i++) {
    alertContainer[i].style.display = 'none';
  }
}



