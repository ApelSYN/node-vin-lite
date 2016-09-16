// source https://en.wikipedia.org/wiki/Vehicle_identification_number
function transliterate (c) {
    return '0123456789.ABCDEFGH..JKLMN.P.R..STUVWXYZ'.indexOf(c) % 10;
}
function get_check_digit (vin) {
    var map = '0123456789X';
    var weights = '8765432X098765432';
    var sum = 0;
    for (var i = 0; i < 17; ++i)
        sum += transliterate(vin[i]) * map.indexOf(weights[i]);
    return map[sum % 11];
}
function validate (vin) {
    if (vin.length !== 17) return false;
    return get_check_digit(vin) === vin[8];
}

module.exports = {
    validete: validate,
    getCheckDigit: get_check_digit
}