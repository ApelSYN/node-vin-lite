const vinRegex           = /^([0-9A-HJ-NPR-Z]{9})([A-HJ-NPR-TV-Y1-9])([0-9A-HJ-NPR-Z])([0-9A-HJ-NPR-Z]{2}\d{4})$/,
      continents         = require('./db/continents'),
      countries          = require('./db/countries'),
      modelyears         = require('./db/modelyears'),
      manufacturers      = require('./db/manufacturers'),
      manufacturerInfo   = require('./lib/manufacturerInfo'),
      manufacturersIndex = require('./db/manufacturersIndex.json'),
      USACDNCheck        = require('./lib/USACDNCheck')
    ;

module.exports = {
   /**
    * Base validation of VIN-code
    * @param {string}  vin
    * @param {boolean} advancedCheck
    * @returns {boolean}
    */
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

   /**
    * Decode standart VIN info
    * @param {string} vin
    * @returns {object}
    */
   decode: function decode (vin, hasDecodeManufacturerInfo = false) {
      vin = vin.toUpperCase();
      let result = {}, wmi = vin.substr(0,3);

      if (vinRegex.test(vin)) {
         result = {
            wmi: wmi,
            vds: vin.substr(3,6),
            vis: vin.substr(9),
            sequentialNumber: vin.substr(11,6),
            check: vin.substr(8,1),
            continent: continents[vin.substr(0,1)],
            country: countries[vin.substr(0,2)],
            manufacturer: manufacturers[wmi],
            modelYear: modelyears[vin[9]]
         };
         if (hasDecodeManufacturerInfo) {
            for (let manufacturerIndex in manufacturersIndex) {
               if (manufacturersIndex[manufacturerIndex].indexOf(wmi) != -1) {
                  result.manufacturerInfo = manufacturerInfo(vin,manufacturerIndex);
               }
            }
         }
      } else {
         result = {
            error: "VIN code is incorrect"
         }
      }
      return result;
   },

   USAValidate: function (vin) {
      vin = vin.toUpperCase();
      return USACDNCheck.validete(vin)
   }
};

