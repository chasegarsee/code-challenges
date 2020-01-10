function binarySearch(list, item) {
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    let mid = low + high;
    let guess = list[mid];
    if (guess == item) {
      return `The number you guessed is at index ${mid} of this list.`;
    } else if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
}

let myList = [];

for (let i = 10; i < 21; i++) {
  myList.push(i);
}

console.log(myList);

console.log(binarySearch(myList, 13));
