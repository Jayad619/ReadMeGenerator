// require modules 
const fs = require('fs'); 
const inquirer = require('inquirer'); 

// linking to page where the README is developed 
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
