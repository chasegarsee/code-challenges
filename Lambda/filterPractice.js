const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present"
];

const result = words.filter(word => word.length > 6);

console.log(result);

function isBigEnough(value) {
  return value >= 15;
}

let filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
console.log(filtered);
