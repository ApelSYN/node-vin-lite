const vinRegex      = /^([0-9A-HJ-NPR-Z]{9})([A-HJ-NPR-TV-Z1-9])([0-9A-HJ-NPR-Z])([0-9A-HJ-NPR-Z]{2}\d{4})$/,
      continents    = require('./db/continents'),
      countries     = require('./db/countries'),
      modelyears    = require('./db/modelyears'),
      hashify       = require('./lib/hashify'),
      manufacturers = hashify(require('./data/manufacturers'))
    ;

module.exports = {
   isValid: function isValid (vin, advancedCheck = true) {
      vin = vin.toUpperCase();
      let result = vinRegex.test(vin);
      if (result && advancedCheck) {
         let continentFlag = (continents[vin.substr(0,1)] !== undefined);
         let countryFlag = !(countries[vin.substr(0,2)] === undefined || countries[vin.substr(0,2)] === 'not assigned');
         result = continentFlag && countryFlag;
      }
      return result;
   },
   decode: function decode (vin) {
      vin = vin.toUpperCase();
      let result = {}, wmi = vin.substr(0,3);

      if (vinRegex.test(vin)) {
         result = {
            wmi: wmi,
            vds: vin.substr(3,6),
            vis: vin.substr(9),
            SequentialNumber: vin.substr(11,6),
            check: vin.substr(8,1),
            continent: continents[vin.substr(0,1)],
            country: countries[vin.substr(0,2)],
            manufacturer: manufacturers[wmi],
            modelyear: modelyears[vin[9]]
         };
         return result;
      }

   }
};

