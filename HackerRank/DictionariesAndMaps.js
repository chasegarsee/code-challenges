const list = "3 sam 99912222 tom 11122222 harry 12299933 sam edward harry";

function processData(input) {
  let tempArray = input.split("\n");

  let entriesLength = tempArray.splice(0, 1);
  let queries = tempArray.splice(entriesLength);

  for (let i = 0; i < entriesLength; i++) {
    tempArray[i] = tempArray[i].split(" ");
  }

  let phoneBookMap = new Map(tempArray);

  for (let i = 0; i < queries.length; i++) {
    phoneBookMap.has(queries[i])
      ? console.log(queries[i] + "=" + phoneBookMap.get(queries[i]))
      : console.log("Not found");
  }
}

processData(list);
