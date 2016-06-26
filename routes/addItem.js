var express = require('express');
var fs = require('fs');
var router = express.Router();
var file = 'items.json';

router.post('/addItem/:id', function (req, res) {
    fs.readFile(file, 'utf8', function (err, data) {
        data = JSON.parse(data);
        if (err){
            res.status(404).send('not found');
        }
        if (data === ''){
            res.status(200).send('no information');
        }
        else {
            var newItem = JSON.parse(data);
            data.push(newItem);
            fs.writeFile(file, JSON.stringify(jsonData), function(err) {});
            res.status(200).send('ok');
        }
    });
});

module.exports = router;