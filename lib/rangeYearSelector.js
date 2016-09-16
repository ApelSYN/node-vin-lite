const math = require('mathjs'),
      currentYear = (new Date()).getFullYear();

module.exports = function rangeYearSelector (hash, year) {
    year = Number(year);
    let ranges = {}, fromYear = 1950, toYear;
    for (hYear in hash) {
        if (hYear == 'present') {
            toYear = currentYear+2;
        } else {
            toYear = Number(hYear)
        }
        ranges[hYear] = math.range(fromYear, toYear);
        fromYear = toYear;
        if (ranges[hYear]._data.indexOf(year) != -1) {
            return hash[hYear];
        }
    }
    return hash['present'];
};