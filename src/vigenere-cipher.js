const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor (reverse=true){
    this.reverse = !reverse;
    this.alphabet = String.fromCharCode(...Array(91).keys()).slice(65).split('');
  }

  baseFunc(message, keyword, encrypt=true){
    if(message === undefined || keyword === undefined) throw new Error('Message and keyword arguments required.');
    let word = message.toUpperCase().split('');
    let key = keyword.toUpperCase().split('');
    let len = key.length, count = 0;
    for(let i = 0; i < word.length; i++){
      if(key[i] === undefined && word[i] !== ' ') {
        key.push(key[count%len]);
        count++;
      }
    }

    if(this.reverse){
      word.reverse();
      key.reverse();
    }

    let res = [], k = 0;
    for(let i = 0; i < word.length; i++){
      let keyIndex = this.alphabet.findIndex(el => el === key[k]);
      let wordIndex = this.alphabet.findIndex(el => el === word[i]);
      if(wordIndex === -1) res.push(word[i]);
      else {
        if(encrypt) res.push(this.alphabet[(keyIndex + wordIndex) % this.alphabet.length]);
        else res.push(this.alphabet[(this.alphabet.length - keyIndex + wordIndex) % this.alphabet.length]);
        // increment k only when letter not a white space
        k++;
      }
    }
    return res.join('');
  }

  encrypt(message, keyword) {
    return this.baseFunc(message, keyword);
  }    

  decrypt(encryptedMessage, keyword) {
    return this.baseFunc(encryptedMessage, keyword, false);
  }
}

module.exports = VigenereCipheringMachine;
