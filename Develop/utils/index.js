// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {   // Github username
        type: "input",
        name: "username",
        message: "What is your GitHub username?",
        validate: nameInput => {
            if (nameInput) {
                return true
                }
            else {
                console.log("Please enter your GitHub username");
                return false
                }
            }
    },
    {   // project title
        type: "input",
        name: "title",
        message: "What is your project title?",
        validate: titleInput => {
            if (titleInput) {
                return true
                }
            else {
                console.log("Please enter your project title");
                return false
                }
            }
    },
    {   // project repo link
        type: "input",
        name: "repo",
        message: "What is your repo link?",
        validate: repoInput => {
            if (repoInput) {
                return true
                }
            else {
                console.log("Please enter your project repository link");
                return false
                }
            }
    },
    {   // project description
        type: "input",
        name: "description",
        message: "Please provide your project's description",
        validate: descriptionInput => {
            if (descriptionInput) {
                return true
                }
            else {
                console.log("Please enter a brief description of your project");
                return false
                }
            }
    },
    {   // project installation instructions
        type: "input",
        name: "installation",
        message: "Please provide the installation instructions",
        validate: installationInput => {
            if (installationInput) {
                return true
                }
            else {
                console.log("Please enter a your project installation process");
                return false
                }
            }
    },
    {   // project application usage
        type: "input",
        name: "usage",
        message: "Please provide the project usage",
        validate: usageInput => {
            if (usageInput) {
                return true
                }
            else {
                console.log("Please enter the project's how to use instructions");
                return false
                }
            }
    },
    {   // project license list
        type: 'list',
        name: 'license',
        message: "Choose a license for your project.",
        choices: ['Apache 2.0', 'BSD', 'MIT', 'No License', 'Unlicense'],
    },
    {   // project motivation
        type: "input",
        name: "motivation",
        message: "Please state why you build this project",
        validate: motivationInput => {
            if (motivationInput) {
                return true
                }
            else {
                console.log("Please the reason of building this project");
                return false
                }
            }
    },
    {   // project contributors
        type: "input",
        name: "contributing",
        message: "Please provide the contributing parties",
        validate: contributingInput => {
            if (contributingInput) {
                return true
                }
            else {
                console.log("Please the other project's collaborator(s)");
                return false
                }
            }
    },
    {   // project aplication instruction
        type: "input",
        name: "tests",
        message: "Please provide the project tests"
    },
    {   // project badge
        type: "input",
        name: "badge",
        message: "Please provide the badges links that you want"
    },
    {   // contact email data
        type: 'input',
        name: 'email',
        message: "Enter email",
        validate: function (email) {
            let pass = email.match(/\S+@\S+\.\S+/g);
            if (pass) {return true;} 
            return "Please enter a valid email";
            },
    },
    ];

// TODO: Create a function to write README file
function writeToFile(data) {
    const generateReadme = generateMarkdown(data);
    fs.writeFile("README.md", generateReadme, (err) => err ? console.log(err) : console.log("README.md has been generated"))
    }  

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((data) => {
            writeToFile(data)
        })
}

// Function call to initialize app
init();
