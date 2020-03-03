function charCount(str) {
  // create an object
  chars = {};
  // eleminate spaces
  // make string lowercase
  const newStr = str
    .toLowerCase()
    .split(" ")
    .join("");
  for (let indiChar of newStr) {
    if (chars[indiChar] > 0) {
      chars[indiChar]++;
    } else {
      chars[indiChar] = 1;
    }
  }
  return console.log(chars);
  // loop through the string and get the individual values of the string.
  // for each char, add it to the object and set the value to 1
  // if the char is already there, add 1 to the key it belongs to
  // return the object
}

const theString = "Hello my name is Chase";
charCount(theString);
