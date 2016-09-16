const wmi = [ 'WVW', 'WVG', 'WV1', 'WV2', 'WV3', 'VWV', 'AAV', '1VW', '1V1', '3VW', '8AW', '9BW', 'WAU', 'TRU', '93V', '2V4' ],
      model = {
        '11': 'Beetle (Brazilian, Mexican, Nigerian)',
        '13': 'Scirocco 3',
        '14': 'Caddy Mk 1 (European Golf 1 pickup)',
        '15': 'Cabriolet (1980 Beetle, Golf 1)',
        '16': 'Jetta 1 and 2 (early) or Beetle (2012-on)',
        '17': 'Golf 1',
        '18': 'Iltis',
        '19': 'Golf 2 (early)',
        '1C': 'New Beetle (US market)',
        '1E': 'Golf 3 Cabriolet',
        '1F': 'Eos',
        '1G': 'Golf and Jetta 2 (late)',
        '1H': 'Golf and Vento 3',
        '1J': 'Golf and Bora 4',
        '1K': 'Golf and Jetta 5, 6',
        '1T': 'Touran',
        '1Y': 'New Beetle Cabriolet',
        '24': 'T3 Transporter Single/Double Cab Pickup',
        '25': 'T3 Transporter Van, Kombi, Bus, Caravelle',
        '28': 'LT Transporter 1',
        '2D': 'LT Transporter 2',
        '2E': 'Crafter',
        '2H': 'Amarok',
        '2K': 'Caddy, Caddy Maxi 3',
        '30': 'Fox (US model ex-Brazil)',
        '31': 'Passat 2',
        '32': 'Santana sedan',
        '33': 'Passat 2 Variant',
        '3A': 'Passat 3, 4',
        '3B': 'Passat 5',
        '3C':  {
                  '2010': 'Passat 6',
                  '2015': 'Passat 7, Passat CC',
                  'present': 'Passat 8, Passat CC'
               },
        '3D': 'Phaeton',
        '50': 'Corrado (early)',
        '53': 'Scirocco 1 and 2',
        '5K': 'Golf and Jetta 6',
        '5M': 'Golf Plus',
        '5N': 'Tiguan',
        '5Z': 'Fox (Europe)',
        '60': 'Corrado (late)',
        '6K': 'Polo Classic, Variant 3',
        '6N': 'Polo 3',
        '6R': 'Polo 5',
        '6X': 'Lupo',
        '70': 'T4 Transporter Vans and Pickups',
        '74': 'Taro',
        '7H': 'T5 Transporter',
        '7L': 'Touareg 1',
        '7M': 'Sharan',
        '7P': 'Touareg 2',
        '86': 'Polo and Derby 1 and 2',
        '87': 'Polo Coupe',
        '9C': 'New Beetle',
        '9K': 'Caddy 2 Van (ex-SEAT Ibiza)',
        '9N': 'Polo 4',
        '9U': 'Caddy 2 Pickup (ex-Skoda Felicia)',
        'AA': 'Up!'
      },
      factory = {
        'A': 'Ingolstadt, Germany',
        'B': 'Brussels, Belgium',
        'C': 'Chattanooga, USA',
        'D': 'Bratislava, Slovakia',
        'E': 'Emden, Germany',
        'F': 'Ipiranga / Resende, Brazil',
        'G': 'Graz, Austria',
        'H': 'Hanover, Germany',
        'K': 'Osnabrück, Germany',
        'L': 'Lagos, Nigeria',
        'M': 'Puebla, Mexico',
        'N': 'Neckarsulm, Germany',
        'P': 'Mosel, Germany or Anchieta, Brazil',
        'R': 'Martorell, Spain',
        'S': 'Salzgitter, Germany',
        'T': {
                '1994': 'Sarajevo, Yugoslavia (up to 1994)',
                'present': 'Taubaté, Brazil'
             }
            ,
        'U': 'Uitenhage, South Africa',
        'V': {
                '1994': 'Westmoreland, USA (up to 1994)',
                'present': 'Palmela, Portugal (from 1994)'
             },
        'W': 'Wolfsburg, Germany',
        'X': 'Poznan, Poland',
        'Y': 'Pamplona, Spain',
        '1': 'Győr, Hungary',
        '2': 'Anting, China',
        '3': 'Changchun, China',
        '4': 'Curitiba, Brazil',
        '6': 'Düsseldorf, Germany (Mercedes-Benz)',
        '7': 'Ludwigsfelde, Germany (Mercedes-Benz)',
        '8': 'Dresden, Germany or General Pacheco, Argentina'
      },
      modelYears = require('../modelyears'),
      rangeYearSelector = require('../../lib/rangeYearSelector');

// Source: http://www.clubvw.org.au/vwvin
module.exports = {
    wmi: wmi,
    decode: function (vin) {
        const modelCode = vin.substr(6,2),
              placeCode = vin.substr(10,1),
              modelYear = modelYears[vin[9]];
        let   description = model[modelCode], place = factory[placeCode];

        if (typeof description === 'object') {
            description = rangeYearSelector(description,modelYear);
        }

        if (typeof place === 'object') {
            place = rangeYearSelector(place,modelYear);
        }

        return {
            description: description,
            place: place
        }

    }
};