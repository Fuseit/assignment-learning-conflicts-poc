const jsonLogic = require("json-logic-js");
const logicRules = require("./dueDateRules.json");

const getUsersDate = (data = {}) => jsonLogic.apply(logicRules, data);

module.exports = getUsersDate;
