'use strict';

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
    res.render('index', {});
});

router.post('/login', (req, res, next) => {
    console.log('message');

    res.status(200)
        .send({
            status: 'Okay'
        });
});
module.exports = router;
