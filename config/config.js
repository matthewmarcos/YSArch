const _ = require('lodash');
const path = require('path');

const config = {
    database: (env) => {
        const env = 'development'
        _.assign(config, require(__dirname + '/env/' + env));
        return config;
    }
};

module.exports = config;
