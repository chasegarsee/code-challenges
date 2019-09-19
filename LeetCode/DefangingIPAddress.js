let defangIPaddr = function(address) {
  array = [...address];

  for (i = 0; i < array.length; i++) {
    if (array[i] == ".") {
      array[i] = "[.]";
    } else {
      continue;
    }
  }
  return array.join("");
};

console.log(defangIPaddr("255.100.50.0"));
