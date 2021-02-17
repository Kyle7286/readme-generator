const fs = require('fs');
const util = require('util');
const inquirer = require('inquirer');
const writeFileAsync = util.promisify(fs.writeFile);



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
            type: 'list',
            choices: ["a", "b", "c"],
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
            message: 'What does the user need to know about contributing to the repo?',
            name: 'contributeRepo',
        },
    ]);
}

const generateReadme = ({
    username,
    email,
    projectname,
    description,
    license,
    dependencies,
    tests,
    usingRepo,
    contributeRepo
}) => {
    return `
# ${username}
# ${email}
# ${projectname}
# ${description}
# ${license}
# ${dependencies}
# ${tests}
# ${username}
# ${usingRepo}
# ${contributeRepo}`
}


const init = () => {
    promptUser().then(response => {
        const readme = generateReadme(response);
        writeFileAsync("README.md", readme)
            .then(() => console.log("Success"))
            .catch(err => console.log(err));
    });
}

init()