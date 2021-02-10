const CustomError = require("../extensions/custom-error");
this.result = [];

const chainMaker = {
  getLength() {
    throw new CustomError('Not implemented');
  },
  addLink(value) {
    throw new CustomError('Not implemented');
  },
  removeLink(position) {
    throw new CustomError('Not implemented');
  },
  reverseChain() {
    throw new CustomError('Not implemented');
  },
  finishChain() {
    throw new CustomError('Not implemented');
  }
};

module.exports = chainMaker;
