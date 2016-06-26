var express = require('express');
var fs = require('fs');
var router = express.Router();
var file = 'items.json';

router.get('/getAllItems', function (req,res) {
    fs.readFile(file, 'utf8', function (err, data) {
       if (err){
           fs.open(file, 'a', function (err, fd) {
               if(err){
                   res.status(404).send(file + 'error');
                   return;
               }
               res.status(200).send(file + 'ok');
           });
           return;
       }
        if (data === ''){
            res.status(404).send(file + 'no information');
            return;
        }
        data = JSON.parse(data);
        res.status (200).json(data);
    });
});

module.exports = router;
