// require modules 
const fs = require('fs'); 
const inquirer = require('inquirer'); 

// linking page to README
const generatePage = require('./utils/generateMarkdown.js');

// array of questions for user
const questions = () => {

    // using inquirer to prompt questions to user 
    return inquirer.prompt([
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github Username? Enter Below.',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Enter your github username!');
                return false; 
            }
        } 
    },
    {
        type: 'input',
        name: 'email',
        message: 'Input your email address please',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Email Address please!');
                return false; 
            }
        }

    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Enter Project Title below.');
                return false; 
            }
        }
    },
    {
        type: "input",
        name: "installation",
        message: "Enter any installation instructions for your application",
      },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this app?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a usage description!');
                return false; 
            }
        }
    },
    {
        type: "list",
        name: "license",
        message: "Which of the following licenses if required?",
        choices: [
          {
            name: "No License",
            value: "None",
          },
          {
            name: "Apache 2.0",
            value:
              "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
          },
          {
            name: "MIT",
            value:
              "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
          },
          {
            name: "Mozilla",
            value:
              "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
          },
          {
            name: "GNU GPL v3",
            value:
              "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
          },
          {
            name: "Eclipse 1.0",
            value:
              "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",
          },
        ],
      },

      {
        type: "input",
        name: "contributions",
        message: "How have contributions been made to this application?",
      },
  
    {
        type: 'input',
        name: 'test', 
        message: 'What command should be run to run tests?',
        default: 'npm test'
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Things user needs to know about contributing to the repo?'
    }
]);
}; 
// function to write README file
const writeFile = data => {
    fs.writeFile('README.md', data, err => {

        // IF an error occurs;
        if (err) {
            console.log(err);
            return;

        // when the README has been created 
        } else {
            console.log("Wow! Your README file has been succesfully created!")
        }
    })
};  
        // function call to initialize program
        questions()

        // getting user answers 
        .then(answers => {
            return generatePage(answers);
        }) 
        // using data to display on page 
        .then(data => {
            return writeFile(data);
        })

        // function that catches errors 
        .catch(err => {
            console.log(err)
}) 