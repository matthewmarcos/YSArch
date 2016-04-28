'use strict';

const express = require('express');
const importer = require('anytv-node-importer');
const Auth = require('./auth');

const router = express.Router();
const ___ = importer.dirloadSync(__dirname + '/../controllers');

router.get('/', (req, res, next) => {
    res.render('index');
});

router.get('/home', (req, res, next) => {
    res.render('home');
});

router.post('/login', Auth(false), ___.account.login);
router.post('/register', Auth(true), ___.account.register);
router.post('/logout', Auth(true), ___.account.logout);

module.exports = router;
