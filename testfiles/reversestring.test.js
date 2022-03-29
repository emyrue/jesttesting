const reverseString = require('../jsfiles/reversestring.js');

test ('reverseString("cow") returns "woc"', () => {
  expect(reverseString('cow')).toBe('woc');
});