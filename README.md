
# README-generator
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
This application runs the user through a series of prompts and comes out with a professional, polished README.md file that can be added to any project.  This project asks all the right questions, generates the correct markdown syntax, and plugs your answers into all the right spots so you don't have to think about it.  The application will write a complete, polished README file and save it to the current repository in a file called 'generatedREADME.md' for use anytime, anywhere. 

This project provided challenges and learnings in the form of working with node.  It was quite a mental adjustment to not be able to pop over to a browswer and open the console to figure out why my application wasn't working.  Another challenge I faced was getting the markdown syntax to write correctly and look normal when it got written to the generated file.  I was having an issue trying to over-stringify the answers from the prompts and it was causing my markdown to render in a lump with \n that I didn't write all over the place, and it took a good amount of troubleshooting and adding in extra syntax to discover it was the way I was passing the data into the function all along.  Overall, it was a good experience to work with node and I'm excited to continue to learn more about programming with node and other tools.

## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)

## Installation
Installation instructions for application:
Ensure node is installed.  Run npm i in repository folder to install inquirer and any dependencies.

## Usage
To use this project, make sure you have node installed and the repo cloned or forked.  Navigate to the repository folder and run npm i to install dependencies.  Then, run the command node index.js.  The application will run through a series of prompts that must be answered before moving on to the next question.  If you don't answer or provide an insufficient response (the only reponse that is validated for quality of response is the email field), the application will instruct you on what to put or instruct you to type N/A.  After satisfactorily completing all the required fields, the application will generate your completed README file and write it all for you.  Your completed README file will be saved under generatedREADME.md in your repository.  If you made a mistake or wish to answer the questions differently, just run through the process again!  It will overwrite your previous readme so you can change whatever you'd like.

[link](to deployed application - url here)

![alt text for screenshot](link to screenshot here)

## License
This project is operating under the MIT license.  For more detailed information, please click [here](https://opensource.org/license/mit).

## Contributing
Contact me for any contributions (see the questions section for contact information).

## Credits
License badges from [lukas-h](https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba)

## Tests
N/A

## Questions
Contact me for any questions regarding this project:

GitHub: [lindsay-terry](https://github.com/lindsay-terry)

Email: lindsaytee66@gmail.com

