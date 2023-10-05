// Create our input data
const unsortedInputArray = [];

// seed data in unsortedInputArray
for (let i = 0; i < 2000; i++) {
  unsortedInputArray.push(Math.round(Math.random() * 2000));
}

// TODO: create bubble sort function
const bubbleSort = (array) => {
  let swapped = true;

  for (let i = 0; i < array.length - 1 && swapped; i++) {
    swapped = false;

    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        swapped = true;
      }
    }
  }

  return array;
};

const sorted = bubbleSort(unsortedInputArray);
console.log("Post Sort:", sorted.join(" "));
console.log("DONE!");
