# assignment-learning-conflicts-poc

Repo using Nodejs to demonstrate a proof of concept of using JsonLogic to serialise the rules for resolving due date conflicts in assigned learning. 

`npm install` to install the dependancies.

`node index.js` to run the rules against a sample data set.

`jest` or `npm test` to run unit tests showing that the rules produce the correct result for different scenarios. The test can be found in `jsonLogicTest.spec.js`

The rule definition can be found in `dueDateRules.json`
