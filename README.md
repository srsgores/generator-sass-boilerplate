# Generator-stylish
[![Build Status](https://secure.travis-ci.org/srsgores/generator-sass-boilerplate.png?branch=master)](https://travis-ci.org/srsgores/generator-sass-boilerplate)

A SASS (SCSS) generator for Yeoman.  Quickly scaffolds out new SCSS files for a new project.

## Getting started
1. Make sure you have [yo](https://github.com/yeoman/yo) installed: `npm install -g yo`
2. Install the generator: `npm install -g generator-sass-boilerplate`
3. Run: `yo sass-boilerplate`
4. Follow the prompts, inserting your user information as needed

## Why It's Awesome
* Variable names are auto-generated to match the project name.  All variables are prefixed with the project name.
This is great for auto-completion (in PHPStorm, WebStorm, SublimeText 2/3, most modern IDEs)
* Author snippet at the beginning of each file with timestamp, copyright, package name,
and description
* Scaffolds out SCSS helpers based off of my [sass boilerplate](https://github.com/srsgores/sass-boilerplate).
Allows for leaner, better CSS.  Optionally includes animation mixins and helpers.
* Icon names are included when you decide to use basic Icomoon icons.  You can easily change an element into an icon
by doing ``@extend .icon-name``

## License
[MIT License](http://en.wikipedia.org/wiki/MIT_License)
