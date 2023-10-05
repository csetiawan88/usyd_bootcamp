const grades = [56, 78, 99, 85];

// TODO: Complete the 'findAverage' function below.
function findAverage(accumulator, currentValue, index, array) {
  return accumulator + currentValue;
}

// TODO: Pass the 'findAverage' into the reduce method.
let gradeAverage = grades.reduce();

grades.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(gradeAverage);

// const array1 = [1, 2, 3, 4];
// array1.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
