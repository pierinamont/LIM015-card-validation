// importamos el objeto `validator`, que contiene las funciones `isValid` y `maskify`
import validator from '../src/validator';

describe('validator', () => {
  it('debería ser un objeto', () => {
    expect(typeof validator).toBe('object');
  });

  describe('validator.isValid', () => {
    it('debería ser una función', () => {
      expect(typeof validator.isValid).toBe('function');
    });

    it('debería retornar true para "4083952015263"', () => {
      expect(validator.isValid(4083952015263)).toBe(true);
    });

    it('debería retornar true para "79927398713"', () => {
      expect(validator.isValid(79927398713)).toBe(true);
    });

    it('debería retornar false para "1234567890"', () => {
      expect(validator.isValid(1234567890)).toBe(false);
    });
  });

  describe('validator.maskify', () => {
    it('debería ser una función', () => {
      expect(typeof validator.maskify).toBe('function');
    });

    it('Debería retornar "############5616" para "4556364607935616"', () => {
      expect(validator.maskify(4556364607935616)).toBe("############5616");
    });

    it('Debería retornar "1" para "1"', () => {
      expect(validator.maskify(1)).toBe("1");
    });

    it.skip('Debería retornar "######orld" para "helloworld"', () => {
      // escribe aquí tu test
    });
  });

  describe('validator.getBrandCard', () => {
    it('debería ser una función', () => {
      expect(typeof validator.getBrandCard).toBe('function');
    });

    it('Debería retornar "Visa" para "4949086731406604"', () => {
      expect(validator.getBrandCard(4949086731406604)).toBe("Visa");
    });

    it('Debería retornar "MasterCard" para "5175602277400058"', () => {
      expect(validator.getBrandCard(5175602277400058)).toBe("MasterCard");
    });

    it('Debería retornar "American Express" para "372800263997044"', () => {
      expect(validator.getBrandCard(372800263997044)).toBe("American Express");
    });

    it('Debería retornar "Diners Club Inter" para "3602182986179824016"', () => {
      expect(validator.getBrandCard(3602182986179824016)).toBe("Diners Club Inter");
    });

  });


});
