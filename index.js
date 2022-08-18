const fs = require('fs');
const CSVToJSON = require('csvtojson');

CSVToJSON().fromFile('file_csv.csv')
    .then(items => {
        const data_format = items.map(item => ({
            vtex_table: Number(item.vtex_table),
            channel_sap: Number(item.channel_sap),
            documentType: Number(item.documentType),
            payerCode: Number(item.payerCode),
            intermediatorCnpj: Number(item.intermediatorCnpj),
        }));

        fs.writeFile('file_json.json', JSON.stringify(data_format, null, 4), (err) => {
            if (err) {
                throw err;
            }
        });

    }).catch(err => {
        console.log(err);
    });