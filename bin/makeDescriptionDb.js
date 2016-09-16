const fs = require('fs'),
    brandsDir = __dirname + '/../db/manufacturers/',
    brandIndexFileName = __dirname + '/../db/manufacturersIndex.json',
    brands = {};
for(var file of fs.readdirSync(brandsDir)) {
    let wmi = require(brandsDir+file).wmi,
        brand = file.substring(0,file.indexOf('.js'));
    brands[brand] = wmi;
}

let brandsStream = fs.createWriteStream(brandIndexFileName, {'flags': 'w'});
brandsStream.write(JSON.stringify(brands));
brandsStream.end();
