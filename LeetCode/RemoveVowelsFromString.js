let removeVowelsFromString = function(str) {
  return str.replace(/[aeiou]/gi, "");
};

console.log(removeVowelsFromString("hello world"));
