 /**validator.isValid(creditCardNumber): creditCardNumber es un string con el número de tarjeta que se va a verificar. Esta función debe retornar un boolean dependiendo si es válida de acuerdo al algoritmo de Luhn. 
 
  validator.maskify(creditCardNumber): creditCardNumber es un string con el número de tarjeta y esta función debe retornar un string donde todos menos los últimos cuatro caracteres sean reemplazados por un numeral (#) o 🐱. Esta función deberá siempre mantener los últimos cuatro caracteres intactos, aún cuando el string sea de menor longitud. */

const validator = {
    isValid: function(inputCard) {
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
    console.log(newArray);
  
   //(4) Sumar todos los números del array
    newArray = newArray.reduce((previus, next) => {
    let sum = previus + next;
    return sum
    });
    console.log(newArray); 

    if(newArray % 10 === 0) {
      return true;
    } else {
      return false;
    }
  },

  maskify: function(inputCard) {
    return inputCard.split('').map((num, i) => {
      if(i < inputCard.length - 4) {
        return '#'
      } else {
        return num;
      }
    }).join('');
    
    

  }
}

  export default validator;





  
  
  