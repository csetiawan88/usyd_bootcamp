Step 1. Create a function that accepts an array and an element.

const linearSearch = (array, element) => {

Step 2. Loop through each element in the given array.

for (let i = 0; i < array.length; i++) {

Step 3. Check to see if the index of the array we are looping through is equal to the element.

if (array[i] === element) {

Step 4. Return the index of the matching element.

      return i;
    }

}

Step 5. Return negative one if no matching element is found in the array.

return -1;
};
