'use strict'

import mongoose from 'mongoose';
import { logger } from '../../logger';
require('dotenv').config();

const SERVER_TYPE = process.env['SERVER_TYPE'];
const mongoUrl = process.env[`${SERVER_TYPE}_MONGO_URL`];

export default () => {
    function connect() {
      mongoose.connect(mongoUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true
      }, function (err) {
        if (err) {
          logger.error('codi-mongo connection error', err);
        }
        logger.info(`codi-mongo connected`);
      });
    }
    connect();
}  