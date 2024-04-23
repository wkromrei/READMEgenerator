const inquirer = require('inquirer');
const fs = require('fs');
const { default: Choices } = require('inquirer/lib/objects/choices');

const generateMarkdown = ({ title, projectDescription, projectDescription1, projectDescription2, projectDescription3, installation, usage1, usage2, questions1, questions2, contributing, license }) =>
  `## ![badge for license](https://img.shields.io/badge/License-${license}-blue)
  # ${title}

  ## Description:
  - ${projectDescription}
  - ${projectDescription1}
  - ${projectDescription2}
  - ${projectDescription3}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation
  
  ### ${installation}
  
  
  ## Usage
  ### ${usage1}
  ### ${usage2}
  

  ## Contributing:
  
  ### ${contributing}

  ## Questions:

  ### ${questions1}
  ### ${questions2}

  ## Tests
  
  `

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'projectDescription',
      message: 'How would you describe your project?',
    },
    {
      type: 'input',
      name: 'projectDescription1',
      message: 'What was your motivation?',
    },
    {
      type: 'input',
      name: 'projectDescription2',
      message: 'What problem does it solve?',
    },
    {
      type: 'input',
      name: 'projectDescription3',
      message: 'What did you learn?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'How is your application installed?',
    },
    {
      type: 'input',
      name: 'usage1',
      message: 'How is your application used?',
    },
    {
      type: 'input',
      name: 'usage2',
      message: 'Paste a link to your walkthrough video here:',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'If there are other contributors besides yourself, list their name and github here. If not, put N/A:',
    },
    {
      type: 'list',
      name: 'license',
      choices:['MIT', 'LGPL', 'WTFPL', 'ISC', 'NCSA'],
      message: 'What license does it use?',
    },
    {
      type: 'input',
      name: 'questions1',
      message: 'Enter a link to your github here:',
    },
    {
      type: 'input',
      name: 'questions2',
      message: 'Enter your email address here:',
    },
  ])
  .then((answers) => {
    const markdownPageContent = generateMarkdown(answers);

    fs.writeFile('README.md', markdownPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });

