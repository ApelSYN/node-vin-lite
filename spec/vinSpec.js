var vin = require('../'),
    dbVins = {
        correct: ['WVWZZZ3CZEE140287','U5YFF52229L068332','1M8GDM9AXKP042788'],
        wrong: ['ZHWGDM9111P042788','1M8GDM9A5KP042788','1M8GDM9A5KP04278']
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
