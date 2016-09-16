/**
 * Get additional description of VIN by manufacturer
 * @param {string} vin
 * @param {string} manufacturer
 */
module.exports = function manufacturerInfo(vin, manufacturer) {
    let manufacturerDecoder;
    if ((manufacturer != undefined) && (/[a-z0-9]{1,}/).test(manufacturer)) {
        manufacturer = String(manufacturer).toLowerCase();
        vin = vin.toUpperCase();
        try {
            manufacturerDecoder = require (`../db/manufacturers/${manufacturer}`);
        } catch (e) {
            return {
                error: `No manufacturer decoder for '${manufacturer}'`
            }
        }
        return manufacturerDecoder.decode(vin)
    } else {
        return {
            error: `No manufacturer decoder for '${manufacturer}'`
        }
    }
};
