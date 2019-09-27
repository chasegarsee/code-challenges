function countApplesAndOranges(s, e, aT, oT, a, o) {
  let appleCount = 0;
  let orangeCount = 0;

  for (let i = 0; i < a.length; i++) {
    const appleLocation = aT + a[i];
    if (appleLocation >= s && appleLocation <= e) {
      appleCount++;
    }
  }
  for (let i = 0; i < o.length; i++) {
    const orangeLocation = oT + o[i];
    if (orangeLocation >= s && orangeLocation <= e) {
      orangeCount++;
    }
  }
  console.log(appleCount);
  console.log(orangeCount);
}

countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]);
