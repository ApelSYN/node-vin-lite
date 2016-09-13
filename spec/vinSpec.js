var vin = require('../'),
    dbVins = {
        correct: [
            'WVWZZZ3CZEE140287',
            'U5YFF52229L068332',
            '1M8GDM9AXKP042788',
            'KMFZBX7HLCU835815',
            '5N1AR2MM9GC610938',
            'U5YHM516ADL012319',
            'WAUZZZ8R0BA098735',
            'WDDEJ71X18A016288',
            'VF3WC5FS9AW055905',
            'WDDEJ71X18A016288',
            'VF7RERHRH76843233',
            'WDB2110161A032195',
            'VF77ENFUXFJ518177',
            'W0L0ZCF6848022377',
            'WDDEJ76X28A010315'
        ],
        wrong: [
            '90WGDM9111P042788',
            '1MIGDM9A5KP042788',
            '1M8GDM9A5KP04278'
        ]
    };

describe('Vin methods Tests / ', function () {
        for (let testVin of dbVins.correct) {
            it("Check correct VIN "+testVin, function () {
                expect(vin.isValid(testVin)).toEqual(true);
            });
        }
        for (let testVin in dbVins.wrong) {
            it("Check wrong VIN "+dbVins.wrong[testVin], function () {
                expect(vin.isValid(dbVins.wrong[testVin])).toEqual(false);
            });
        }
});
