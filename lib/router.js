'use strict';

const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
    res.render('index', {});
});

router.get('/home', (req, res, next) => {
    res.render('home', {});
});

router.post('/login', (req, res, next) => {
    console.log('message');

    res.status(200)
        .send({
            status: 'Okay'
        });
});
module.exports = router;
