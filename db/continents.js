const addRange = require('../lib/addRange'),
      continents = {};

// Africa
addRange(continents, '', 'A','H','Africa');

// Asia
addRange(continents, '', 'J','R','Asia');

// Europe
addRange(continents, '', 'S','Z','Europe');

// North America
addRange(continents, '', '1','5','North America');

// Oceania
addRange(continents, '', '6','7','Oceania');

// South America
addRange(continents, '', '0','0','South America');
addRange(continents, '', '8','9','South America');

//console.log(continents);

module.exports = continents;
