const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(/* disksNumber, turnsSpeed */) {
  let turns = (2**arguments[0])-1;
  let seconds = Math.floor((3600/arguments[1])*turns);

  return {
    turns: turns,
    seconds: seconds
  }
};
