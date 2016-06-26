var express = require('express');
var fs = require('fs');
var router = express.Router();
var file = 'items.json';

router.delete('/deleteItem/:id', function (req, res, next) {
    fs.readFile(file, "utf8", function (err, data) {
        if (err) {
            next(err);
            return;
        }
        if (data === '' || data === {}) {
            res.sendStatus(404);
            return;
        }
        else {
            var deldata = JSON.parse(data);
            for (var i = 0; i < delData.items.length; i++) {
                if (deldata.items[i].id.toString() === req.params.id) {
                    deldata.items.splice(i, 1);

                    fs.writeFile(file, JSON.stringify(deldata), function (err) {
                    });
                    res.status(204).json();
                    return;
                }
            }
        }
        res.sendStatus(404);
    });
});

module.exports = router;