const fs = require('fs');
const inquirer = require('inquirer');

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