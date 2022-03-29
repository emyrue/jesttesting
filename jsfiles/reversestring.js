function reverseString(string) {
  let newString = "";
  for (let i = 0; i < string.length; i += 1) {
    if (i === 0) {
      newString = string.slice(string.length - 1);
    } else {
      newString += string.slice((string.length - i - 1), string.length - i);
    }
  }
  return newString;
}

module.exports = reverseString;