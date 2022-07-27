const fs = require('fs');
const CSVToJSON = require('csvtojson');

CSVToJSON().fromFile('skus.csv')
    .then(skus => {
        let allSkus = skus;
        let allFormattedSkus = [];

        while (allSkus.length) {
            allFormattedSkus.push(allSkus.splice(0, 39).map(sku => sku.refId));
        }

        fs.writeFile('skus.json', JSON.stringify(allFormattedSkus, null, 4), (err) => {
            if (err) {
                throw err;
            }
        });

    }).catch(err => {
        console.log(err);
    });