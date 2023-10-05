// Create our input data
const unsortedInputArray = [];

// Seed data in unsortedInputArray
for (let i = 0; i < 2000; i++) {
  unsortedInputArray.push(Math.round(Math.random() * 2000));
}

// Create a merge sort function
const mergeSort = (array) => {
  if (array.length <= 1) {
    return array; // Base case: return the array if it has 1 or fewer elements
  }

  // Split the array into two halves
  const middle = Math.floor(array.length / 2);
  const leftHalf = array.slice(0, middle);
  const rightHalf = array.slice(middle);

  // Recursively merge sort each half
  const sortedLeft = mergeSort(leftHalf);
  const sortedRight = mergeSort(rightHalf);

  // Merge the sorted halves
  return merge(sortedLeft, sortedRight);
};

// Merge function to merge two sorted arrays
const merge = (left, right) => {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex), right.slice(rightIndex));
};

const sorted = mergeSort(unsortedInputArray);
console.log("Post Sort:", sorted.join(" "));
console.log("DONE!");
