//imported the modules fs and inquirer
const fs = require("fs");
const inquirer = require("inquirer");

//prompts the questions that user need to fill out for their Readme content
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "Enter your project title here:",
      },
      {
        type: "input",
        name: "description",
        message:
          "Provide a short description explaining the what, why, and how of your project:",
      },
      {
        type: "input",
        name: "installation",
        message:
          "What are the steps required to install your project? Enter N/A if not applicable:",
      },
      {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use:",
      },
      {
        type: "input",
        name: "credits",
        message:
          "List your collaborators, third-party assets that require attribution and if you followed tutorials include links of those here as well:",
      },
      {
        type: "list",
        name: "license",
        message:
          "Select the license you chose for the project you created. (user arrow keys to navigate, use enter to select):",
        choices: [
          "N/A",
          "MIT",
          "Apache-2.0",
          "GNU GPLv3.0",
          "Eclipse Public 2.0",
          "Mozilla Public 2.0",
          "The Unlicense",
        ],
      },
      {
        type: "input",
        name: "contribute",
        message:
          "If you created an application or package and would like other developers to contribute to it, you can include guidelines here on how to do so:",
      },
      {
        type: "input",
        name: "test",
        message:
          "If you wrote tests for your application, provide examples on how to run them here: ",
      },
      {
        type: "input",
        name: "githubUserName",
        message: "Please enter your GitHub username here:",
      },
      {
        type: "input",
        name: "email",
        message: "Please enter your email address here:",
      },
    ])
    .then((userInput) => {
      const readMeContent = `# ${userInput.title}

## Description
${userInput.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contribute](#contribute)
- [Test](#test)
- [Questions](#questions)

## Installation
${userInput.installation}

## Usage
${userInput.usage}

## Credits
${userInput.credits}

## License
${userInput.license}

## Contribute
${userInput.contribute}

## Test
${userInput.test}

## Questions
For any questions or inquiries, you may contact me directly through GitHub or my email:
- GitHub: [${userInput.githubUserName}](https://github.com/${userInput.githubUserName})
- Email: ${userInput.email}
`;
