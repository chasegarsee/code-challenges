// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  //string split on spaces.
  // iterate and replace fist char with toUpperCase() char
  let res = "";
  let foundSpace = false;

  for (let i = 0; i < str.length; i++) {
    let current = str[i];
    if ((i = 0)) {
      current = str[i].toUpperCase();
    } else if (str[i] === " ") {
      foundSpace = true;
    } else if (foundSpace) {
      current = str[i].toUpperCase();
      foundSpace = false;
    }
    res += current;
  }
  return str;
}
