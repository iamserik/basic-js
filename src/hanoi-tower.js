const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(/* disksNumber, turnsSpeed */) {
  throw new CustomError('Not implemented');
  // remove line with error and write your code here

  const disksNumber = arguments[0];
  const turnsSpeed = arguments[1];
  let rods = [[], [], []];
  let turns = 0;
  let seconds = 0;

  for(let i = disksNumber; i <= 1; i--) rod[0].push(i);
};
