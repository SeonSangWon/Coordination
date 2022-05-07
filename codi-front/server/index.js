'use strict'

import { app } from './app';
require('dotenv').config();

const server = require('http').createServer(app);
const HTTP_PORT = process.env.HTTP_PORT;

server.listen(HTTP_PORT, '0.0.0.0', () => {
    console.info(`>> codi-front Listen to port ${HTTP_PORT}`);
});