'use strict'

const express = require('express');
export const app = express();

import { logger } from '../logger'; 
import route from './route';
require('dotenv').config();

route();
const server = require('http').createServer(app);
const HTTP_PORT = process.env.HTTP_PORT;

server.listen(HTTP_PORT, '0.0.0.0', () => {
    logger.info(`>> codi-crawling Listen to port ${HTTP_PORT}`);
});