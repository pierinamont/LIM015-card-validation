const validator = {
  isValid: function (inputCard) {
    const reverseInput = inputCard.split('').reverse().map(Number);
    // console.log(reverseInput);
    // (2) Alert para que no dejen el input vacío
    if (inputCard.length === 0) {
      alert('No puedes dejar este campo vacío');
    } 
    // (3) Operación a las posiciones pares 
    let newArray = reverseInput.map((num, i) => {
      if (i % 2 === 1) {
        const double = (num * 2);
        const m = double.toString().split('').reduce(function (a, b) { 
          if (double >= 10) { 
            return a + parseInt(b);
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
    // (4) Sumar todos los números del array
    newArray = newArray.reduce((previus, next) => {
      const sum = previus + next;
      return sum;
      });
    console.log(newArray); 

    if (newArray % 10 === 0) {
      return true;
    } else {
      return false;
    }
  },

  maskify: function (inputCard) {
    // Números que estarán ocultos
    let replaceNums = inputCard.slice(0, -4);
    // Números que serán visibles
    let noReplaceNums = inputCard.slice(-4);
    // Nuevo array que oculta los números
    let newArray = replaceNums.split('').map(function(num) {
      return num = '#';
    });
    newArray = newArray.join('');
    return newArray.concat(noReplaceNums);
  },

  /*
  getBrandCard (inputCard) {
    let brandNumber = inputCard.toString(); // .value
    // visa
    if (brandNumber.slice(0) == 4) {
      return visa;
    }
  
  }
  */
  
}
export default validator;
