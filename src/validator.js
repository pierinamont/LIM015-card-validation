 /**validator.isValid(creditCardNumber): creditCardNumber es un string con el número de tarjeta que se va a verificar. Esta función debe retornar un boolean dependiendo si es válida de acuerdo al algoritmo de Luhn. 
 
  validator.maskify(creditCardNumber): creditCardNumber es un string con el número de tarjeta y esta función debe retornar un string donde todos menos los últimos cuatro caracteres sean reemplazados por un numeral (#) o 🐱. Esta función deberá siempre mantener los últimos cuatro caracteres intactos, aún cuando el string sea de menor longitud. */

const validator = {
    isValid: function(creditCardNumber) {
     /* if(creditCardNumber % 10 === 0) {
       return true;
      } else {
        return false;
      }*/
      console.log(creditCardNumber);
    },

    maskify: function(creditCardNumber) {
      console.log(creditCardNumber);
    }
  } 
  export default validator;





  
  
  