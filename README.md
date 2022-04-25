# Webtrigon interview round 2 - Music test

This is an interview round to test the following attributes of the interviewee:

* **Problem domain analysis** The focus of this coding round depends not on the solution domain (knowledge of programming languages, frameworks, architectural decisions to make for the project, etc.) but rather the problem domain (the actual problem that we are trying to solve for the customer). In this case, the problem domain is representational music

* **Self sufficiency** In face of tasks that the interviewee has not encountered before, how well can they handle the task _without_ any human intervention? (Note that this round is set up such that there may be things that the interviewee is not aware of, but all of them are surface-level problems, with links to reading material that will help solve their problem)

## The project description in 20 words or less
Take a list of musical notes and play it's tune in the browser, following it's pitch and rhythm.

## The project description in detail
There is an array of objects in one of the code files - each object has a pitch, octave, the no of beats, and (optionally) an accidental. Additionally, the HTML file also has audio elements linked to files that play a single note. Use the array information to play the right notes in the right order for the right amount of time. You can also use the attached sheet music for reference (Music test.pdf). You may need to look up on notes, dotted notes, ties, accidentals, and time signatures to make sense of the PDF.

## What you need to know before starting this project

* Programming constructs of at least any one programming language (conditions, iterations, functions)
* HTML5
* Basics of Javascript (Event handling, DOM access, callback functions)

## What will you be using and encountering in this project

* Git and Github (for version control and code collaboration/review). [Learn the basics here](https://www.atlassian.com/git/tutorials/what-is-version-control)
* Setting up a node project, and running the most basic npm commands.
* How to work with typescript (you can write your code in javascript, but will need to understand the typescript code that has already been written for the project). [Refer the typescript docs](https://www.typescriptlang.org/docs/home.html).

## Setup
Before you start this project, you need to have [NodeJS](https://nodejs.org/en/download/) installed on your system.

Fork this project to your own Github account ([What is forking?](https://guides.github.com/activities/forking/)) and clone it locally.

Go to your cloned folder and install the project dependencies

### npm

```bash
# install the node project along with dependencies (this can only be done after installing NodeJS)
npm i
```

## Work on the solution
The solution is to play the tune when clicking on the "Start Playing" button. There's a file called "index.ts" with a TODO block. Start your solution there. You are, of course, free to add other functions and other files. But do not change the data for any of the other existing typescript files.

The following command will watch your typescript files and automatically compile them to javascript
```bash
npm run watch
```

Simply open the "index.html" file in a browser of your choice (although Chrome is undoubtedly better for debugging), and click the "Start playing" button to test out whether your solution works.

## Submit the solution for review
Push your code upstream (you can find more details in the version control basics that have been linked above), and either make a pull request, or invite us to collaborate on your forked project.
