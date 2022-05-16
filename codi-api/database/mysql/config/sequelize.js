'use strict'

require('dotenv').config();
const env = process.env;

export default {
    real: {
        database : env.REAL_DB,
        username : env.REAL_USER,
        user     : env.REAL_USER,
        password : env.REAL_PASSWORD,
        host     : env.REAL_HOST,
        port     : env.REAL_PORT,
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
        database : env.TEST_DB,
        username : env.TEST_USER,
        user     : env.TEST_USER,
        password : env.TEST_PASSWORD,
        host     : env.TEST_HOST,
        port     : env.TEST_PORT,
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