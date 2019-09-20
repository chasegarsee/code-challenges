let numJewelsInStones = function(J, S) {
  let hashTable = {};
  let count = 0;

  for (let j in J) {
    hashTable[J[j]] = j;
  }
  for (let i in S) {
    if (hashTable[S[i]]) {
      hashTable[S[i]];
      count++;
    }
  }
  return count;
};
console.log(numJewelsInStones("aA", "aAAbbbb"));
