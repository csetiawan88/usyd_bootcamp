// Get all the button elements on the page.
const buttons = document.getElementsByTagName("button");

// Get all the button elements on the page.
const clickHandler = function () {
  // TODO: Add a comment describing the purpose of this variable.
  let count = 0;

  // Return an inner function, which will be used as the event handler.
  // TODO: Add a comment describing what is happening.
  return function () {
    // TODO: Add a comment describing how this variable is being scoped.
    count++;
    // TODO: Add a comment describing how we are using the 'count' variable.
    // Update the text content of the button to display the number of clicks.
    this.textContent = `Clicks: ${count}`;
  };
};

// TODO: Add a comment describing the purpose of this loop.
// Loop through all the button elements and add a click event listener to each.
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", clickHandler());
}
