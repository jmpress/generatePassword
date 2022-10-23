# Flexible Password Generator
#### Generates a custom length password, with or without special characters
#### By Jeffrey Press

## Description
A simple but flexible command line utility to generate random passwords. Length and inclusion of special characters can be specified with command line arguments (see below).

## Specs
+ Default behavior prints to console one random password of length 10 consisting of at least one digit, one uppercase letter, and one lowercase letter.
+ If no command line arguments are used, a small help dialog is printed to console, along with a password conforming to the default as above.
+ If `--special` command line argument is included, the generated password will also include at least one special character from the following `!@#$%^&*()_+=.;:`.
+ Length of password can be changed by using the `-n` command line flag followed by the desired length. Example: `-n 16` will generate a 16 digit password. 
    + The length value must be greater than or equal to 4. If not, no password will be generated and the user will be given this information.
+ The raw `generatePassword.js` file also exports the `generatePassword()` function for use in other applications. 
    + This function takes two parameters; a boolean value to signal usage of special characters and an integer value to define the length of the returned password. It returns a string value.

## Setup/Installation Requirements
+ Fork and clone this repository locally (or just download the `generatePassword.js` file).
+ Install Node.
+ Navigate to the appropriate folder and run `node generatePassword.js` in the console.
+ Try out `node generatePassword.js --special`, `node generatePassword.js -n 16`, and `node generatePassword.js --special -n 12` as well for examples of the non-default functionality.


## Known Bugs
+ None so far. Let me know if you find one!

## Support and contact details
Please contact j.michael.press@gmail.com with questions, comments, or concerns. You are also welcome to submit a pull request.

## Technologies Used
   + Javascript
   + Node.js

### License
This software is released under the GNU general public license.

Copyright (c) 2022 Jeffrey Michael Press