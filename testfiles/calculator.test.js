const calculator = require('../jsfiles/calculator.js');
describe('calculator', () => {
  describe('add', () => {
    test('1 + 1 = 2', () => {  
      expect(calculator.add(1, 1)).toBe(2);
    });

    test('2 + 2 = 4', () => {  
      expect(calculator.add(2, 2)).toBe(4);
    });

    test('3 + 5 = 8', () => {
      expect(calculator.add(3, 5)).toBe(8);
    });
  });

  describe('subtract', () => {
    test('1 - 1 = 0', () => {
      expect(calculator.subtract(1, 1)).toBe(0);
    });

    test('2 - 1 = 1', () => {
      expect(calculator.subtract(2, 1)).toBe(1);
    });

    test('1 - 2 = -1', () => {
      expect(calculator.subtract(1, 2)).toBe(-1);
    });
  });

  describe('divide', () => {
    test('1 / 1 = 1', () => {
      expect(calculator.divide(1, 1)).toBe(1);
    });

    test('6 / 3 = 2', () => {
      expect(calculator.divide(6, 3)).toBe(2);
    });

    test('1 / 2 = 0.5', () => {
      expect(calculator.divide(1, 2)).toBe(0.5);
    });
  });

  describe('multiply', () => {
    test('1 * 1 = 1', () => {
      expect(calculator.multiply(1, 1)).toBe(1);
    });

    test('2 * 3 = 6', () => {
      expect(calculator.multiply(2, 3)).toBe(6);
    });

    test('6 * 10 = 60', () => {
      expect(calculator.multiply(6, 10)).toBe(60);
    });
  });
});