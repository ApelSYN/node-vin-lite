module.exports = function hashify(records, code, name) {
    code = code || 'code';
    name = name || 'name';

    let result = {};
    for (let record of records) {
        result[record[code]] = record[name];
    }
    return result;
};