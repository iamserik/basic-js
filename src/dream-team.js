const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(/* members */) {
  if(!Array.isArray(arguments[0])) return false;
  let members = arguments[0]
                    .filter(name => typeof name === 'string')
                    .map(name => name.trim().toUpperCase())
                    .sort();
  let team = [];
  for(let i = 0; i < members.length; i++){
    team.push(members[i][0]); 
  }

  return team.join('');
};
