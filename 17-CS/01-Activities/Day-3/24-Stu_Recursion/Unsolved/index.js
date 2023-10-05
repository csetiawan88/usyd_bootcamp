// TODO: Add a comment describing what the `position` parameter means for this function.

// The position parameter is the index of the Fibonacci number to return. A Fibonacci number is a number in the Fibonacci sequence, which is a sequence of numbers where each number is the sum of the two preceding numbers. The first two numbers in the Fibonacci sequence are 0 and 1, so the third Fibonacci number is 0 + 1 = 1, the fourth Fibonacci number is 1 + 1 = 2, and so on.
const fibonacci = (position) => {
  // TODO: Add a comment describing the purpose of this conditional statement.

  // This conditional statement checks if the position is less than 2. If it is, then the function simply returns the position. This is because the first two Fibonacci numbers are 0 and 1, so there is no need to calculate them recursively.
  if (position < 2) {
    return position;
  }

  // TODO: Add a comment describing the purpose of this return statement.

  // This return statement returns the sum of the Fibonacci numbers at the previous two positions. This is because the Fibonacci number at any position is the sum of the Fibonacci numbers at the two previous positions.

  return fibonacci(position - 1) + fibonacci(position - 2);
};

// TODO: What will this return? 34
console.log(fibonacci(9));

//The Fibonacci sequence is a sequence of numbers where each number is the sum of the two preceding numbers. The first two numbers in the Fibonacci sequence are 0 and 1, so the third Fibonacci number is 0 + 1 = 1, the fourth Fibonacci number is 1 + 1 = 2, and so on.

//The 9th Fibonacci number is the sum of the 8th and 7th Fibonacci numbers, which are 21 and 13, respectively. Therefore, the 9th Fibonacci number is 21 + 13 = 34.
