// store the first element as the smallest value you have seen so far
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (i !== min) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}

console.log(selectionSort([22, 54, 34, 26, 87, 13, 65, 35]));
// compare this item to the next item in the array until you find a smaller number.

// if a smaller number is found, designate that smaller number to be the new "minumum" and continue until the end of the array.

// if the "ninimum is not the value( index ) you initiall began with, swap the two values

// repeat this with the next element until the array is sorted.
