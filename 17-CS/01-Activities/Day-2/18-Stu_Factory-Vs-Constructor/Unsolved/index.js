// TODO: Refactor the class to a factory function.
// class Lesson {
//   constructor() {
//     this.title = 'Module 17 - Computer Science';
//     this.description = 'CS for JS';
//   }
//   information() {
//     console.log(this.title, this.description);
//   }
// }

// const csForJS = new Lesson();
// csForJS.information();

/////////////////////
function createLesson() {
  const title = "Module 17 - Computer Science";
  const description = "CS for JS";

  function information() {
    console.log(title, description);
  }

  return {
    information,
  };
}

const csForJS = createLesson();
csForJS.information();
