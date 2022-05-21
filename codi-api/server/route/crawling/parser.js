'use strict'

import { app } from '../../index';
import { logger } from '../../../logger';
import modelSearch from '../../../database/mongo/model/documents';
const axios = require('axios');
const SERVER_TYPE = process.env['SERVER_TYPE'];
const CRAWLING_URL = process.env[`${SERVER_TYPE}_CRAWLING_URL`];

const setRegion = async (info) => {
    try {
        const collectionName = 'region';
        const model = modelSearch(collectionName, 'region');
        await new model({
            language: info.language ?? null,
            zoneCode: info.zoneCode ?? null,
            region: info.region ?? null,
            province: info.province ?? null,
            state: info.state ?? null,
            nx: info.nx ?? null,
            ny: info.ny ?? null,
            lotHour: info.lotHour ?? null,
            lotMinute: info.lotMinute ?? null,
            lotSecond: info.lotSecond ?? null,
            latHour: info.latHour ?? null,
            latMinute: info.latMinute ?? null,
            latSecond: info.latSecond ?? null
        }).save();
    } catch (err) {
        logger.error(`setRegion`, err);
        next(err);
    }
};

const handler = async (req, res, next) => {
    try {
        const result = await axios.get(`http://${CRAWLING_URL}/parser`);
        result.data.forEach(async (info) => {
            await setRegion(info);
        });
        res.send(true);
      } catch (err) {
        logger.error(`handler`, err);
        next(err);
      }
};

export default () => {
    try {
      app.get('/crawling/parser', handler);
    } catch(err) {
        logger.error(`[route/crawling/parser.js] handler`, err);
        return undefined;
    }
  };