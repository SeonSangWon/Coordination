'use strict'

const express = require('express');
export const app = express();

import { logger } from '../logger'; 
import mysql from '../database/mysql';
import mongo from '../database/mongo';
import route from './route';
require('dotenv').config();

mongo();
mysql();
route();
const server = require('http').createServer(app);
const HTTP_PORT = process.env.HTTP_PORT;

server.listen(HTTP_PORT, '0.0.0.0', () => {
    logger.info(`>> codi-api Listen to port ${HTTP_PORT}`);
});