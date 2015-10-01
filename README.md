# Ping Pong League App


## Specification

To confirm who the best ping pong player is we need to create a web application to log each ping pong game and build up a ping pong league table.

## Summary





## Requirements

You should be able to add and remove games from the league (it’s ok to lose the data on refresh)
You should see a league table showing the top 5 players.
You should see a list of game results.


[Ping Pong scoring](https://en.wikipedia.org/wiki/Table_tennis#Scoring)

### User stories


### Implementation



## Technologies/resources used
* Node.js
* Express.js
* AngularJS
* HTML
* Sass
* Bourbon Neat


## Further improvements

* E2E testing to check order by functionality in the player leaderboard and latest games sections, to ensure the latest game inputted shows at the top and that the player with the highest score shows at the top
* Improve unit test coverage
* Remove global controller and separate components into modular structure according to function, define both a Player and a Game module - better separation of responsibilities. This will be useful as the app gets more complicated with the addition of more features
* Add form validation to ensure users cannot add games when the form fields have not been completed correctly - with good UX for error message (remove all alert boxes)
* Add gravatars for players and show in league table and latest game results




## How to install & run
