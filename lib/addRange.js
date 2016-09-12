const math = require('mathjs');

module.exports = function addRange (hash, prefix = '', startLetter, endLetter, name) {
    let myRange = math.range(startLetter.charCodeAt(0), endLetter.charCodeAt(0),true);

    for (let charCode of myRange._data) {
        let letter = String.fromCharCode(charCode);
        hash[prefix+letter] = name
    }
};