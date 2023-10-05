const inquirer = require("inquirer");
const fs = require("fs");

const generateHTML = ({ name, location, github, linkedin }) =>
  `<!DOCTYPE html>
<html lang="en">
<body>
<li>
${name}
</li>
<li>
${location}
</li>
<li>
${github}
</li>
<li>
${linkedin}
</li>
</body>
</html>`;

const answers = "";

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is your location?",
      name: "location",
    },
    {
      type: "input",
      message: "What is your github?",
      name: "github",
    },
    {
      type: "input",
      message: "What is your linkedin?",
      name: "linkedin",
    },
  ])
  .then((answers) => {
    // generate html
    const answer = generateHTML(answers);
    // write to a file
    fs.writeFile("index.html", answer, (err) =>
      err ? console.log(err) : console.log("Successfully created index.html!")
    );
  });
