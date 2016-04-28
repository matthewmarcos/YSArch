const async = require('async');

exports.login = (req, res, next) => {

    res.status(200)
        .send({
            status: '200',
            type: 'login'
        });
};


exports.register = (req, res, next) => {

    res.status(200)
        .send({
            status: '200',
            type: 'register'
        });
};
