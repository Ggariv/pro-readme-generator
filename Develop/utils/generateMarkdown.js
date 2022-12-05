// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'Apache 2.0') {
    return `![Apache 2.0 License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
  } else if (license === 'BSD') {
    return `![BSD License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)`;
  } else if (license === "MIT") {
    return `![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } else if (license === 'Unlicense') {
    return `![Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)`
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "Apache 2.0") {
    return `[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === "BSD") {
    return `[BSD (3-Clause) License](https://opensource.org/licenses/BSD-3-Clause)`;
  } else if (license === "MIT") {
    return `[MIT License](https://opensource.org/licenses/MIT)`;
  } else if (license === "Unlicense") {
    return `[Unlicense](http://unlicense.org/)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "No License") {
    return "";
  } else {
    return `## License`, '<br>', `This project is licensed under the ${renderLicenseLink(license)}.`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}
  <br>

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Badge](#badge)
  - [Questions](#questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}
   
  ## Usage
  ${data.usage}
   
  ## License
  ${renderLicenseSection(data.license)}
     
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
   
  ## Badge
  ${data.badge}

  ## Questions
  For any questions, please contact me with the information below: <br />
  GitHub: [${data.username}](https://github.com/${data.username})<br />
  Email: ${data.email}
  `;
}

module.exports = generateMarkdown;
