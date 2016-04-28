'use strict';

const async = require('async');
const _ = require('lodash');

exports.login = (req, res, next) => {

    function start() {

        let result = {};

        const body = _.pick(req.body, ['username']);
        _.assign(result, body);
        _.assign(result, {
            status: '200',
            type: 'login'
        });

        req.session.user = body;

        respond(200, result);
    }

    function respond(status, response) {
        res.redirect('/home');
    }

    start();
};


exports.logout = (req, res, next) => {

    function start() {
        req.session.destroy(function(err) {
            if(err) {
                respond(403, {
                    reason: 'Cannot log out'
                });
            }
            else {
                respond(200, {
                    message: 'Successfully Logged out'
                });
            }
        });
    }

    function respond(status, response) {
        res.redirect('/');
    }

    start();
};


exports.register = (req, res, next) => {

    function start() {

        let result = {};

        const body = _.pick(req.body, ['username', 'password']);
        _.assign(result, body);
        _.assign(result, {
            status: '200',
            type: 'login'
        });


        respond(200, result);
    }

    function respond(status, response) {
        res.status(200)
            .send(response);
    }

    start();
};
