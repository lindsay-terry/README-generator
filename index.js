// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'Please enter your Github username.',
    },

    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address.',
    },

    {
        type: 'input',
        name: 'projectName',
        message: 'What is the name of your project?',

    },

    {
        type: 'input',
        name: 'description',
        message: 'Please write a description of your project.',
    },

    {
        type: 'list',
        name: 'license',
        message: 'What kind of license does your project need?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },

    {
        type: 'input',
        name: 'dependencies',
        message: 'Is there a command needed to install dependencies?',
    },

    {
        type: 'input',
        name: 'tests',
        message: 'What command is needed to run tests?',
    },

    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about the project?',
    },

    {
        type: 'input', 
        name: 'contributions',
        message: 'What does the user need to know about contributing to the project?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('generatedREADME.md', JSON.stringify(data), (err) => {
        if (err)
            console.log("There's been an error.  Please try again.");
        else {
            console.log('README has been successfully generated.  Please see generatedREADME.md for your README!');
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        writeToFile('generatedREADME.md', answers);
    });
}

// Function call to initialize app
init();
