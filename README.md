# Ping Pong League App


## Specification

To confirm who the best ping pong player is we need to create a web application to log each ping pong game and build up a ping pong league table.



## Implementation
* Built as a single page application in JavaScript with AngularJS for quick prototype development
* AngularJS is a good framework for a SPA like this, as it makes RESTful API interactions relatively seemless
* Player data is stored in a JSON file and called in using a service
* To assist with building a responsive layout I used Bourbon Neat because it is lightweight and was helpful for speeding up common layout tasks



## Requirements

* Add and remove games from the league (it’s ok to lose the data on refresh)
* View a league table showing the top 5 players
* Display a list of game results



## Technologies/resources used
* Node.js
* Express.js
* AngularJS
* HTML
* Sass
* Bourbon Neat


## Further improvements

* Add a method of persisting the data. Look into setting up a MongoDB database to store the player and match data so the app can be scaled up as needed. Alternatively look into local browser storage or a third party service such as Firebase
* E2E testing to check order by functionality in the player leaderboard and latest games sections, to ensure the latest game inputted shows at the top and that the player with the highest score shows at the top
* Improve unit test coverage and make tests more robust
* Remove global controller and separate components into modular structure according to function, define both a Player and a Game module - better separation of responsibilities. This will be useful as the app gets more complicated with the addition of more features
* Add form validation for good UX (remove alerts used for testing). Ensure that users cannot add games when the form fields have not been completed correctly
* Switch player select element to a text input field with autocomplete functionality
* Add gravatars for players and show in league table and latest game results
* Add a feature to autocomplete player names when adding a match
* Bundle JS files into one single minified file, add as Gulp task (https://github.com/jonkemp/gulp-useref)
* Display a list of tweets with the hashtag #pingpong
* Add functionality to add new players
* Use game results to calculate winner, loser and update the player points total accordingly (https://en.wikipedia.org/wiki/Table_tennis#Scoring)





## How to install & run

You will need to have Node (with npm) and Bower installed

Run the following commands in the command line to install locally, and then go to http://localhost:3000/ to load

```
git clone https://github.com/lroliphant/ping-pong-league.git
cd ping_pong_league
npm install
bower install
npm start
```

* To run test suite:

**Karma Tests:**
```karma start test/karma.conf.js ```
