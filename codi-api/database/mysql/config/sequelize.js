'use strict'

require('dotenv').config();

export default {
    real: {
        database : process.env['REAL_DB'],
        username : process.env['REAL_USER'],
        user     : process.env['REAL_USER'],
        password : process.env['REAL_PASSWORD'],
        host     : process.env['REAL_HOST'],
        port     : process.env['REAL_PORT'],
        dialect  : 'mysql',
        charset  : 'utf8',
        collate  : 'utf8_general_ci',
        maxConcurrentQueries : 100,
        logging  : false,
        define   : {
            timestapms: false
        }
    },
    development: {
        database : process.env['TEST_DB'],
        username : process.env['TEST_USER'],
        user     : process.env['TEST_USER'],
        password : process.env['TEST_PASSWORD'],
        host     : process.env['TEST_HOST'],
        port     : process.env['TEST_PORT'],
        dialect  : 'mysql',
        charset  : 'utf8',
        collate  : 'utf8_general_ci',
        maxConcurrentQueries : 100,
        logging  : false,
        define   : {
            timestapms: false
        }
    }
};