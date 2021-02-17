const fs = require('fs');
const inquirer = require('inquirer');



const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'username',
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is your project\'s name?',
            name: 'projectname',
        },
        {
            type: 'input',
            message: 'Please write a short description of your project:',
            name: 'description',
        },
        {
            type: 'input',
            message: 'What kind of license should your project have?',
            name: 'license',
        },
        {
            type: 'input',
            message: 'What command should be run to install dependencies?',
            name: 'dependencies',
        },
        {
            type: 'input',
            message: 'What command should be run to run tests?',
            name: 'tests',
        },
        {
            type: 'input',
            message: 'What does the user need to know about using the repo?',
            name: 'usingRepo',
        },
        {
            type: 'input',
            message: 'What does the user need to know about using the repo?',
            name: 'contributeRepo',
        },


    ]);
}
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'Where are you located?',
            name: 'location',
        },
        {
            type: 'input',
            message: 'Short bio?',
            name: 'bio',
        },
        {
            type: 'input',
            message: 'Linkedin URL?',
            name: 'linkedin',
        },
        {
            type: 'input',
            message: 'Github URL?',
            name: 'github',
        },
    ]).then((response) =>
        fs.writeFile(
            `./README.md`, `Hello Readme`, (err) => err ? console.log("There was an error!") : console.log("Successfully appended to file!")


        )
    );