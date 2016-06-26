var express = require('express');
var fs = require('fs');
var router = express.Router();
var file = 'items.json';

router.get('/getItem/:id', function (req, res) {
    fs.readFile(file, 'utf8', function (err, data) {
        data = JSON.parse(data);
        for (var i = 0; i < data.length; i++){
            if (data[i].id.toString() === req.params.id){
                res.status(200).json(data[i]);
            }
        }
        if (err){
            res.status(404).send('not found');
        }
        if (data === ''){
            res.status(200).send('no information');
        }
    });
});

module.exports = router;