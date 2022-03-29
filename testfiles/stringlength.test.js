const stringLength = require('../jsfiles/stringlength.js');

test('length of "cow" is 3', () => {
  expect(stringLength('cow')).toBe(3);
  expect(stringLength('')).toBeFalsy();
});