const CustomError = require("../extensions/custom-error");

module.exports = function repeater(/* str, options */) {
  let res = [];
  let ad = [];
  let str = arguments[0];
  if(typeof str !== 'string') str += '';
  const options = arguments[1];
  let repeatTimes = options.repeatTimes === undefined ? 1 : options.repeatTimes;
  let separator = options.separator === undefined ? '+' : options.separator;
  let addition = options.addition !== undefined ? options.addition + '' : options.addition;
  let additionRepeatTimes = options.additionRepeatTimes === undefined ? 1 : options.additionRepeatTimes;
  let additionSeparator = options.additionSeparator === undefined ? '|' : options.additionSeparator;

  for(let j = 0; j < additionRepeatTimes; j++){
    ad.push(addition);
  }

  for(let i = 0; i < repeatTimes; i++){
    let strWithAddit = str.concat((ad.length !== 0) ? ad.join(additionSeparator) : '');
    res.push(strWithAddit);
  }
  return res.join(separator);
};
  