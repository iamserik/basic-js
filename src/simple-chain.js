const CustomError = require("../extensions/custom-error");

const chainMaker = {
  result: [],
  getLength() {
    return this.result.length;
  },
  addLink(value) {
    this.result.push(value);
    return this;
  },
  removeLink(position) {
    if(typeof position !== 'number' || 0 > position > this.result.length-1) {
      this.result = [];
      throw new Error('Index out of range');
    }
    this.result.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.result.reverse();
    return this;
  },
  finishChain() {
    let s = '';
    for(let i = 0; i < this.result.length; i++){
      if(i === (this.result.length-1)) s += `( ${this.result[i]} )`;
      else s += `( ${this.result[i]} )~~`;
    }
    this.result = [];
    return s;
  }
};

module.exports = chainMaker;
