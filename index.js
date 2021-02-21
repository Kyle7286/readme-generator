// require libraries
const fs = require('fs');
const util = require('util');
const inquirer = require('inquirer');
// convert writeFile (from FS) to async
const writeFileAsync = util.promisify(fs.writeFile);

// prompt user data
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
            choices: ["APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
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

// Build readme string 
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
    
    let  badge = "";
    // Add the badge syntax for the appropriate license selected
    if (license === "APACHE 2.0") {badge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`}
    if (license === "GPL 3.0") {badge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`}
    if (license === "BSD 3") {badge = `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`}
    if (license === "None") {badge = `*This project is not licensed*`}

     
    return `
# ${projectname} 
${badge}

## Description🔖
${description}

## Table of Contents📗
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Questions](#questions)

## Installation💿

Install these dependencies:
\`\`\`
${dependencies}
\`\`\`

## Usage👇
${usingRepo}

## License🔑
This project is licensed under ${license}

## Contributing🙋
${contributeRepo}

## Tests🔎
\`\`\`
${tests}
\`\`\`

## Questions❓
* ${username}
* ${email}
`
}

const init = () => {
    promptUser().then(response => {
        const readme = generateReadme(response);
        writeFileAsync("./generated/README.md", readme)
            .then(() => console.log("Success"))
            .catch(err => console.log(err));
    });
}

// Run script on call
init()