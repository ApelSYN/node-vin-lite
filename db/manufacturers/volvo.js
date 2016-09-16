const wmi = [ 'YV1', 'YV2', 'YV3', 'YV4', '4V1', '4V2', '4V3', '4V4', '4V5', '4V6', '4VL', '4VM', '4VZ', 'MHA'],
    vechileCode = {
        'A':  {
            '2006': '240',
            '2015': 'S80',
            'present': 'XC90'
        },
        'B':  {
            '2008': '260',
            'present': 'V70, XC70'
        },
        'C':  'XC90',
        'D':  'XC60',
        'F':  {
            '2010': '740',
            'present': 'New S60/V60'
        },
        'G':  {
            '2010': '760',
            'present': 'V60 Plug-In Hybrid'
        },
        'H':  '780',
        'J':  'V70',
        'K':  '960',
        'L':  {
            '1998': '850, S70',
            'present': 'V70'
        },
        'M':  {
            '2013': 'S40, V50, C30, C70',
            'present': 'V40'
        },
        'R': {
            '2013': 'S40, V50, C30, C70',
            'present': 'S60'
        },
        'S': 'V70, XC70',
        'T': 'S80',
        'V': 'V40',
    },
    safety =  {
        'A': 'Air Bag & 3-Point Safety Harness (Seat Belt)',
        'X': '3-Point Safety Harness (Seat Belt)'
    },
    body_and_safety = {
        'S': 'Sedan (4-door) with Air Bag & 3-Point Safety Harness (Seat Belt)',
        'W': 'Wagon (5-door) with Air Bag & 3-Point Safety Harness (Seat Belt)',
        'T': 'Sedan (4-door) 3-Point Safety Harness (Seat Belt) - Canada',
        'X': 'Wagon (5-door) 3-Point Safety Harness (Seat Belt) - Canada'
    },
    vehicle_platform = {
        'C': 'All-New C70',
        'H': 'S40 AWD, S60 AWD, S80 AWD',
        'J': 'V50 AWD, V70 AWD',
        'K': 'C30 FWD',
        'L': 'XC60 2WD',
        'M': {
                 '2013': 'XC90 5-Seater AWD',
                 'present': 'V40 Cross Country AWD'
             },
        'N': 'XC90 5-Seater FWD',
        'R': 'XC90 5-Seater AWD',
        'S': 'S40 FWD, S60 FWD, S80 FWD',
        'V': 'V40 FWD',
        'W': 'V50 FWD, V60 FWD, V60 Plug-In Hybrid (AWD), V70 FWD, V70 AWD',
        'Y': 'XC90 7-Seater FWD',
        'Z': 'XC60 AWD, XC70 AWD, XC90 7-Seater AWD'
    },
    digit5Arr =  {
        '1992': {
            'description': 'SafetyEquipment',
            'data': safety
        },
        '1998': {
            'description': 'BodyandSafetyEquipment',
            'data': body_and_safety
        },
        'present': {
            'description': 'VehiclePlatform',
            'data': vehicle_platform
        }
    },
    engineCodeArr = {
        '17': 'B4204S2 V40 2.0l FWD',
        '18': 'B4194T V40 1.9l Turbo FWD',
        '20': 'B4164S3 C30 1.6 FWD',
        '21': 'B4184S11 V50/S40 1.8',
        '30': 'D5244T18 XC90 2.4 AWD',
        '38': 'B5244S4 S40/V50 2.4i FWD',
        '39': 'B5244S7 S40/V50 2.4i FWD',
        '40': 'B4204T11 S60/V60 2.0 T5 FWD',
        '41': 'B5202S 850/V70 2.0i FWD',
        '43': 'B5204T3 850/V70/S80 2.0 T5 FWD',
        '47': 'B5204T 850/V70 2.0 T5 FWD',
        '51': 'B5252S 850/V70 2.5i FWD or D5204T6 V40/V40CC D3/D4',
        '52': 'B5254T4 S60/V70 R AWD',
        '53': 'B5234T3 S60/V70 T5 FWD',
        '54': 'B5244T5 S60 T5 FWD',
        '55': 'B5254FS 850/V70/S70 FWD',
        '56': {
                '2000': 'B5254T S70/V70 GLT FWD - 1999',
                'present': 'B5244T 2000 -'
              },
        '57': 'B5234T 850/V70 2.3T FWD Turbo',
        '58': 'B5234T5 1995-1997 850 T-5R/R ; B5244T3 S60/V70/S80/XC70 2000 -',
        '59': 'B5254T2 S80/S60/XC90 2.5T FWD/AWD, V70 2.5T FWD, XC70 AWD',
        '61': 'B5244S S60/V70 2.4 FWD',
        '64': 'B5244S6 S60/V70 2.4 FWD',
        '65': 'B5244S2 S80/V70 2.4 FWD',
        '66': 'B5244S5 S40/V50 2.4 FWD',
        '67': 'B5244S4 C30/C70 T5 FWD',
        '68': 'B5254T3 S40/V50 T5 FWD/AWD',
        '69': 'D5244T5 S80/V70 2.4D FWD',
        '70': 'D4192T3 S40/V40 / D5244T10 XC60 AWD D5(205)',
        '71': 'D5244T4 V70 AWD D5(185), XC90 AWD D5(185)',
        '72': 'D5252T S70/S80 2.5TDi FWD',
        '73': 'D4192T2 S40/V40',
        '74': 'D5244T2',
        '75': 'D4204T C30 2.0D',
        '76': 'D4164T 1.6D (PSA-Ford Engine)',
        '77': {
                '1984': 'D24 (1981-1984)',
                'present': 'D5244T8 S40 D5 AT'
              },
        '78': 'D4192T4 S40/V40',
        '79': 'D5244T D5(163)',
        '82': 'D5244T15 XC60 AWD D5(215)',
        '84': 'D4162T S60',
        '85': 'B8444S XC90/S80 V8 AWD',
        '88': {
                  '1985': 'B23F (1983-1984)',
                  '1995': 'B230F (1985-95)',
                  'present': 'D5204T3 XC60'
              },
        '90': 'B6284T S80 2.8 T6',
        '91': 'B6294T S80/XC90 2.9 T6',
        '94': 'B6294S S80 2.9 FWD',
        '97': 'B6299S S80 2.9 FWD',
        '98': 'B6324S XC90/S80/V70 3.2 FWD/XC70 AWD',
        '99': 'B6304T4 S80 3.0 T6 AWD',
        'AA': 'V60 Plug-In Hybrid',
        '11': 'B17A',
        '24': 'B19E',
        '26': 'B19ET',
        '37': 'D20',
        '44': 'B21E',
        '45': 'B21F',
        '46': 'B21ET',
        '48': 'B21LH Jet',
        '49': 'B21F MPG (1981), B21F Kjet (1982)',
        '62': 'B28A',
        '80': 'B230G',
        '81': 'B23A',
        '83': 'B230FD w/ pulsair',
        '86': 'B230FT - EGR',
        '87': 'B230FT - non EGR',
        '89': 'B234F',
        '92': 'B6244F',
        '93': 'B6254F',
        '95': 'B6304F with air pump',
        '96': 'B6204F without air pump',
    },
    digit8Arr = {
        '1992': {
            'description': 'SafetyEquipment',
            'data': {
                '2': '2 Door',
                '4': '4 Door',
                '5': '5 Door (Wagon)',
                '7': '2 Door Coupe (Bertone)'
            }
        },
        'present': {
            'description': 'EmissionControlEquipment',
            'data': {
                '0': 'SULEV+ (Super Ultra Low Emissions Vehicle) / Engine Codes 39, 55, 64, 72',
                '2': 'ULEV2 (Ultra Low Emissions Vehicle) / Engine Codes 38, 41, 51, 59, 61, 67, 68, 85, 98, 99',
                '4': 'Engine Codes 71',
                '7': 'LEV2 (Low Emissions Vehicle) / Engine Codes 52, 54',
                '8': 'Engine Codes 70',
                'D': 'L6'
            }
        }
    },
    gearboxArr = {
        1: 'M90/M56 Manual (USA - CDN Check Code)',
        2: 'M46/M59/MTX75 Manual (USA - CDN Check Code)',
        3: 'M47/M58 Manual (USA - CDN Check Code)',
        4: 'M66 Manual (USA - CDN Check Code)',
        5: 'ZF22 (USA - CDN Check Code)',
        6: 'AW70/71/72 lock-up / AW42 Auto (USA - CDN Check Code)',
        7: 'AW70/71 no lock-up / AW50AWD Auto (USA - CDN Check Code)',
        8: 'AW42AWD Auto (USA - CDN Check Code)',
        9: 'AW55-50SN Auto V50, AW55-51 S40D5 AT (USA - CDN Check Code)',
    },
    factory = {
        '0': 'Sweden Kalmar Plant',
        '1': 'Sweden] Torslanda Plant VCT 21(Volvo Torslandaverken) (Gothenburg)',
        '2': 'Belgium] Ghent Plant VCG 22',
        '3': 'Canada] Halifax Plant',
        '4': 'Italy] - Bertone models 240',
        '5': 'Malaysia',
        '6': 'Australia',
        '7': 'Indonesia',
        'A': 'Sweden Uddevalla Plant (Volvo Cars/TWR (Tom Walkinshaw Racing))',
        'B': 'Italy - Bertone Chongq 31',
        'D': 'Italy - Bertone models 780',
        'E': 'Singapore',
        'F': 'The Netherlands] Born Plant (NEDCAR)',
        'J': 'Sweden] Uddevalla Plant VCU 38 (Volvo Cars/ Pininfarina Sverige AB)',
        'M': 'PVÖ 53'
    },

    modelYears = require('../modelyears'),
    rangeYearSelector = require('../../lib/rangeYearSelector');

// Source: https://en.wikibooks.org/wiki/Vehicle_Identification_Numbers_(VIN_codes)/Volvo/VIN_Codes
module.exports = {
    wmi: wmi,
    decode: function (vin) {
        const digit4 = vin.substr(3,1),
            digit5 = vin.substr(3,1),
            digit8 = vin.substr(7,1),
            gearbox = vin.substr(8,1),
            engineCode = vin.substr(5,2),
            placeCode = vin.substr(10,1),
            modelYear = modelYears[vin[9]];
        let description = vechileCode[digit4],
            place = factory[placeCode],
            digit5Desc, digit8Desc;

        if (typeof description === 'object') {
            description = rangeYearSelector(description,modelYear);
        }

        let result =  {
            description: description,
            place: place,
            gearbox: gearboxArr[gearbox]
        };

        digit5Desc =  rangeYearSelector(digit5Arr,modelYear);
        result[digit5Desc.description] = digit5Desc.data[digit5];

        if (typeof result[digit5Desc.description] === 'object') {
            result[digit5Desc.description] = rangeYearSelector(result[digit5Desc.description],modelYear);
        }

        result.engine = engineCodeArr[engineCode];
        if (typeof result.engine === 'object') {
            result.engine = rangeYearSelector(result.engine,modelYear);
        }

        digit8Desc =  rangeYearSelector(digit8Arr,modelYear);
        result[digit8Desc.description] = digit8Desc.data[digit8];

        if (typeof result[digit8Desc.description] === 'object') {
            result[digit8Desc.description] = rangeYearSelector(result[digit8Desc.description],modelYear);
        }

        return result;

    }
};