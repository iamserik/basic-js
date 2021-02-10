const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(/* date */) {
  if(arguments.length === 0) return 'Unable to determine the time of year!';
  let date = arguments[0];
  if(!(date instanceof Date)) throw new Error('Should be Date object');
  JSON.stringify(date);
  let month = date.getMonth();
  if([2, 3, 4].includes(month)) return 'spring';
  if([5, 6, 7].includes(month)) return 'summer';
  if([8, 9, 10].includes(month)) return 'autumn|fall';
  if([0, 1, 11].includes(month)) return 'winter';

};
