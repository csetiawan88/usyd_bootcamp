//Step 1. Create a function that accepts a sorted array and the element we are searching for.

const binarySearch = (array, element) => {
  //Step 2. Define two variable which represent the start index and the end index of the given array.

  let start = 0;
  let end = array.length - 1;

  //Step 3. While start index is less than or equal to end index we continue to loop through the given array.

  while (start <= end) {
    //Step 4. Define a variable which represents the middle index of the given array.

    let mid = Math.floor((start + end) / 2);

    //Step 5. If the given element is at the given array's middle index, return that middle index number.

    if (array[mid] === element) {
      return mid;

      //Step 6. Else if the given array's middle index less than the given element, start index equals the middle index plus one.
    } else if (array[mid] < element) {
      start = mid + 1;

      //Step 7. Else update the end index to the middle index minus one.
    } else {
      end = mid - 1;
    }
  }

  //Step 8. After exiting the loop return '-1' because the given element was not found.

  return -1;
};
