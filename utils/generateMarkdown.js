// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge;

  switch (license) {
    case 'MIT': 
      licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;

    case 'APACHE 2.0':
      licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;

    case 'GPL 3.0':
      licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;

    case 'BSD 3-Clause':
      licenseBadge = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
      break;

    case 'None':
      licenseBadge = '';
      break; 
  }
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink;

  switch (license) {
  case 'MIT':
    licenseLink = 'https://opensource.org/license/mit';
    break;

  case 'APACHE 2.0':
    licenseLink = 'https://opensource.org/license/apache-2-0';
    break;

  case 'GPL 3.0':
    licenseLink = 'https://www.gnu.org/licenses/gpl-3.0.en.html';
    break;

  case 'BSD 3-Clause':
    licenseLink = 'https://opensource.org/licenses/BSD-3-Clause';
    break;

  case 'None':
    licenseLink = '';
    break;  
 }
 return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return `No license is in use at this time`
  } else {
    return `This project is operating under the ${license} license.  For more detailed information, please click [here](${renderLicenseLink(license)}).`
  } 
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
return `
# ${data.projectName}
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)

## Installation
Please use ${data.dependencies} to install dependencies.

## Usage
${data.usage}

## License
${renderLicenseSection(data.license)}

## Contributing
${data.contributions}

## Credits
${data.credits}

## Tests
Please use ${data.tests} to run tests.

## Questions
Contact me for any questions regarding this project:

GitHub: [${data.username}](https://github.com/${data.username})

Email: ${data.email}
`;
}

module.exports = generateMarkdown;
