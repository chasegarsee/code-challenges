function scrollingText(text, width) {
    let tick = 0;
  ​
    setInterval(() => {
      process.stdout.write(`${createFixLengthText(text, width, tick)}\r`);
      tick++;
    }, 50);
  }
  ​
  function createFixLengthText(text, width, tick) {
    const emptySpaces = ' '.repeat(width);
    const str = emptySpaces + text + emptySpaces;
    tick = tick % (text.length + width);
  ​
    return str.slice(tick, tick + width);
  }
  ​
  scrollingText(
    '"People love what other people are passionate about." — Mia',
    50
  );