# 1-2-Trivia

**1-2-Trivia** is a trivia game about numbers and trivia facts about these numbers. It was created as a example project for a [Angular](https://angular.io/) framework class. The project uses [Bootstrap](https://getbootstrap.com/) as CSS library and [Numbers API](http://numbersapi.com/) as trivia database.

## Development server

You will need to [install NPM and Angular](https://angular.io/guide/setup-local) to use the project. If it is the first time running the project, clone the repository and use `npm install` to install the dependencies.

To run a local/dev server, use `ng serve` and navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Building the project

Unfortunately, the project doesn't run builded in a HTTPS server because of the HTTP origin of the trivia API we are using. I'm trying to contact the team behind Numbers API to see if they can update it to HTTPS. Until then, you can run the game locally or make a fork and use another API.

## Important branches

If you are following the classes, you can checkout to branches `part1` and `part2` to see how the project will be in the end of each part. The `main` branch has the current version of the game.

## Links that (maybe) can be interesting

Through the development, I used some useful links to solve some problems and use some code snippets:

- [How to Add Bootstrap to an Angular CLI project](https://loiane.com/2017/08/how-to-add-bootstrap-to-an-angular-cli-project/)
- [Create an angular project directly into a git folder](https://samiprogramming.medium.com/create-an-angular-project-directly-into-a-git-folder-d08b17d42c25)
- [How to randomize (shuffle) a JavaScript array?](https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array)
- [Communicating with backend services using HTTP](https://angular.io/guide/http)
- [Math.random()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
