function capitalize(string) {
  let newString = '';

  newString = string.slice(0, 1).toUpperCase() + string.slice(1).toLowerCase();

  return newString;
}

module.exports = capitalize;