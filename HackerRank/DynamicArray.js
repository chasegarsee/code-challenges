function dynamicArray(n, queries) {
  const seq = [];
  let lastAnswer = 0;
  let result = [];

  for (let i = 0; i < queries.length; i++) {
    const [q, x, y] = queries[i];
    const seqIndex = (x ^ lastAnswer) % n;
    if (!seq[seqIndex]) {
      seq[seqIndex] = [];
    }
    if (q === 1) {
      seq[seqIndex].push(y);
    } else if (q === 2) {
      lastAnswer = seq[seqIndex][y % seq[seqIndex].length];
      result.push(lastAnswer);
    }
  }
  return result;
}
