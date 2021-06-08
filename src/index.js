import validator from './validator.js';
//console.log(validator); 

/**Función de botón para iniciar */
document.getElementById('startbtn').addEventListener('click', start);
function start() {
    const startContent = document.getElementsByClassName('home-container');
    const infoContent = document.getElementsByClassName('info-container');

    for (let i = 0; i < startContent.length; i++) {
        startContent[i].style.display = 'none';
    }

    for (let i = 0; i < infoContent.length; i++) {
        infoContent[i].style.display = 'block';
    }
}

/**Función de botón de información */
document.getElementById('infobtn').addEventListener('click', showInfo);
function showInfo() {
    const showInfoContent = document.getElementsByClassName('show-info-container');
    const infoContent = document.getElementsByClassName('info-container');
    const showHeader = document.getElementsByClassName('header');
    const showFooter = document.getElementsByClassName('footer');

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

/**Función de botón para is a validar tarjeta */
document.getElementById('validbtn').addEventListener('click', showCard);
function showCard() {
    const infoContainer = document.getElementsByClassName('info-container');
    const showCardContent = document.getElementsByClassName('card-valid-container');
    const showHeader = document.getElementsByClassName('header');
    const showFooter = document.getElementsByClassName('footer');
    
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

/**Función de botón para ir a validar tarjeta */
document.getElementById('validbutton').addEventListener('click', displayCard);
function displayCard() {
    const showInfoContainer = document.getElementsByClassName('show-info-container');
    const showCardContent = document.getElementsByClassName('card-valid-container');
    const showHeader = document.getElementsByClassName('header');
    const showFooter = document.getElementsByClassName('footer');
    
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

// PERMITIR SOLO NÚMEROS EN EL INPUT 
document.getElementById('inputCard').addEventListener('keypress', convert);

function convert(e) { 
   
    if(!justNumbers(e)) {
        e.preventDefault();
    }

    function justNumbers(e) {
        
        let key = e.keyCode || e.which;
        
        if(key >= 48 && key <= 57) {
            return true;
        } else {
            alert('Ingresar solo números');
            return false;
        }
    }
}

document.getElementById('cardbtn').addEventListener('click', getNumber);
function getNumber() {
    //(1) Obtener input y colocarlo en reversa
    const inputCard = document.getElementById('inputCard').value;
    const reverseInput = inputCard.split('').reverse();
    
    validator.isValid(reverseInput);
  
    //(2) Alert para que no dejen el input vacío
    if(inputCard.length === 0) {
        alert('No puedes dejar este campo vacío');
    } 
    
    //(3) Implementar la multiplicación solo a los números pares 
    let newArray = reverseInput.map(num => {
        if(num % 2 == 0) {
            let double = (num*2);
            const m = double.toString().split('').reduce(function(a, b) { 
                if(double >= 10){ 
                    return a + parseInt(b)
                } else {
                    return double;
                }
            }, 0);
            return m;
        } else {
            return num;
        }
    });
    
    console.log(newArray);
    
    
    //(4) Si el resultado de la * es >= 10, sumar digitos 
    /*
    console.log(double.toString().split('').reduce(function(a, b) { 
        return a + parseInt(b) 
    }, 0));
    /*
    function sumDigits (even) {
        let transform = even.split('');
        let sum = transform.reduce(function (acc, even) {

        });
    }
    */
}

   /**
     var numbers = [1, 5, 10, 15];
    var doubles = numbers.map(function(x) {
    return x * 2;
    });
    // doubles is now [2, 10, 20, 30]
    // numbers is still [1, 5, 10, 15]
    */