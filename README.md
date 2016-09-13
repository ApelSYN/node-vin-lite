vin-lite
========

A simple VIN (Vehicle Identification Number) checker. All checks based on ISO 3779:2009. Detailed info: https://en.wikipedia.org/wiki/Vehicle_identification_number

This module contains only a part (about 1000) WMI-code the major vehicle manufacturers. The complete SAE WMI database contains more than 33,000 international WMI codes and 
is available through annual subscription to the site http://www.sae.org/standardsdev/groundvehicle/vin.htm

Starting with version 2.1.0, added all the codes xUSSR manufacturers.
     
quick start
===========

**Install from npm:**

```sh
$ npm install vin-lite
```


example
=======

```JavaScript
var vin = require('vin-lite');

console.log(vin.isValid("WVWZZZ3CZEE140287")); // true

console.log(vin.isValid("WVWZZZ3CZEE140287",false)); // Verify regular expression only

console.log(vin.decode("WVWZZZ3CZEE140287")); 
/* { wmi: 'WVW',
     vds: 'ZZZ3CZ',
     vis: 'EE140287',
     SequentialNumber: '140287',
     check: 'Z',
     continent: 'Europe',
     country: 'West Germany',
     manufacturer: 'Volkswagen',
     modelyear: 2014 }
*/
```

history
=======

  * v2.1.0 - Added all codes xUSSR manufacturers
  * v2.0.0 - Slightly changed the format of the object that returns the decode method.  