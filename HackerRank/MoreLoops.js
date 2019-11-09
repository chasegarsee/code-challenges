let words = [2, "Hacker", "Rank"];

function processData(input) {
  console.log(input);
  let dup = input;
  //.split("\n").split(1);
  dup.forEach(str => {
    let even = "";
    let odd = "";
    for (let i = 0; i < str.length; i++) {
      i % 2 ? (odd += str[i]) : (even += str[i]);
    }
    console.log(`${even} ${odd}`);
  });
}

processData(words);
