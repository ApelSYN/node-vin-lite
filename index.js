const vinRegex      = /^(([a-h,A-H,j-n,J-N,p-z,P-Z,0-9]{9})([a-h,A-H,j-n,J-N,p,P,r-t,R-T,v-z,V-Z,0-9])([a-h,A-H,j-n,J-N,p-z,P-Z,0-9])(\d{6}))$/,
      hashify       = require('./lib/hashify'),
      manufacturers = hashify(require('./data/manufacturers')),
      countries     = hashify(require('./data/countries')),
      modelyears    = hashify(require('./data/modelyears'));

module.exports = {
   isValid: function isValid (vin) {
      return vinRegex.test(vin);
   }
};

