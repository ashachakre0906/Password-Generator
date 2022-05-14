## Title of the project
Password Generator
## Decsription of the project
This challenge requires us to build a logic inside the `function generatePassword()`so that user should be able to sucessfully generate random password based on the criteria they have selected.HTML,CSS and some part of javascript code is provided by UC Berkely extension.
## User Story
```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```
## Acceptance Criteria
```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```
## Links  
[Github URL](https://github.com/ashachakre0906/Password-Generator)<br>
[Live URL](https://ashachakre0906.github.io/Password-Generator/)<br>

## Built with
-  HTML
- CSS
- Javascript

## What I learned
- How to write code from scratch.
- Advanced CSS which includes Media queries,Flexbox,Reponsive design,CSS positioning,Psuedo Selectors,Psuedo-elements,CSS variables.

***Some HTML code which I'm proud of***
- Declaring CSS variable globally inside the :root selector so that I can reuse throughout the document in CSS styling sheets.
```
:root {
--secondarybackground-color:dimgrey;
--primarybackgroundcolor:rgb(145, 109, 115);
--navheader:whitesmoke;
--boxshadow: 0 3px 5px rgba(227, 184, 184, 0.1);
--fontfamily: "Trirong", serif;
--paracolor:cornsilk;
--textshadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;
--hovershadow:0 0 2px 2px #8b8eaf , inset 0 0 5px 5px #8b8eaf;
}
```
- Media query for max-width: 576px
```
@media screen and (max-width: 576px){
.nav-bar li a{
  font-size:0.8em;
}
```
- Psuedo selector used and provided margin which creates the gap between the anchor links 
for each section.
```
.projectlinks a:not(:last-child){
margin-right:10px;
}
```
### Useful resources
- [w3schools](https://w3schools.com)
- [MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Advanced_styling_effects)
-[CSS-Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Github Docs](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#headings)

## Author
- Linkedin - [@ashachakre](https://www.linkedin.com/in/ashachakre/)

## License
Licensed under the [MIT](https://choosealicense.com/licenses/mit/) license.

Copyright (c) [2022] [Asha Chakre]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.





