const capitalize = require('../jsfiles/capitalize.js');

test('"emily" returns "Emily"', () => {
  expect(capitalize("emily")).toBe("Emily");
});

test('"luca" returns "Luca"', () => {
  expect(capitalize("luca")).toBe("Luca");
});