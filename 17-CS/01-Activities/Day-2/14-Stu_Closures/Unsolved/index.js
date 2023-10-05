// TODO: Complete the 'counter' function below.
function counter() {
  let count = 0;

  function increment() {
    count += 1;
    return count;
  }

  return {
    increment,
  };
}

module.exports = counter;
