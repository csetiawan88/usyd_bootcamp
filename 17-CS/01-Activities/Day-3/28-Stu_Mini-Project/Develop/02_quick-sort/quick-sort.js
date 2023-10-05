// Create our input data
const unsortedInputArray = [];

// Seed data in unsortedInputArray
for (let i = 0; i < 2000; i++) {
  unsortedInputArray.push(Math.round(Math.random() * 2000));
}

// Create a quick sort function
const quickSort = (array) => {
  const stack = [];
  stack.push(0);
  stack.push(array.length - 1);

  while (stack.length > 0) {
    const end = stack.pop();
    const start = stack.pop();

    if (start >= end) continue;

    let pivotIndex = partition(array, start, end);

    if (pivotIndex - 1 > start) {
      stack.push(start);
      stack.push(pivotIndex - 1);
    }

    if (pivotIndex + 1 < end) {
      stack.push(pivotIndex + 1);
      stack.push(end);
    }
  }

  return array;
};

// Partition function to select a pivot and partition the array
const partition = (array, start, end) => {
  const pivot = array[end];
  let i = start - 1;

  for (let j = start; j < end; j++) {
    if (array[j] <= pivot) {
      i++;
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  [array[i + 1], array[end]] = [array[end], array[i + 1]];
  return i + 1;
};

const sorted = quickSort(unsortedInputArray);
console.log("Post Sort:", sorted.join(" "));
console.log("DONE!");
