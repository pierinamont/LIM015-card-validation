import validator from './validator.js';
//console.log(validator); 

//Función de botón para iniciar 
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

//Función de botón de información 
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


//Función de botón para ir a validar tarjeta 
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

//Función de botón para ir a validar tarjeta
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

//Fórmula de Luhn 
document.getElementById('cardbtn').addEventListener('click', getNumber);
function getNumber() {
    //(1) Obtener input y colocarlo en reversa
    const inputCard = document.getElementById('inputCard').value;
    const reverseInput = inputCard.split('').reverse().map(Number);
    
    console.log(reverseInput);
  
    //(2) Alert para que no dejen el input vacío
    if(inputCard.length === 0) {
        alert('No puedes dejar este campo vacío');
    } 

    //(3) Operación a las posiciones pares 
    let newArray = reverseInput.map((num, i) => {
        if(i % 2 === 1) {
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

validator.isValid(newArray);
   
   //(5) Sumar todos los números del array
   newArray = newArray.reduce((previus, next) => {
    let sum = previus + next;
    return sum
});

validator.isValid(newArray); 


}





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