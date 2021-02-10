const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(/* sampleActivity */) {
  let arg = arguments[0];

  if(typeof arg !== 'string') return false;
  let sampleActivity = parseFloat(arg);
  if(sampleActivity !== NaN || sampleActivity > 15 || sampleActivity <= 0) return false;

  let k = 0.693 / HALF_LIFE_PERIOD;

  let t = Math.log(MODERN_ACTIVITY/sampleActivity)/k;
  return Math.ceil(t);
};
