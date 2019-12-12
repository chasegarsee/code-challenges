function jumpingOnClouds(c) {
  let jumps = 0;

  for (let i = 0; i < c.length - 1; i++) {
    if (i + 2 < c.length && c[i + 2] !== 1) i++;
    jumps++;
  }
  return jumps;
}

arr = [0, 0, 0, 1, 0, 1, 0];

console.log(jumpingOnClouds(arr));
