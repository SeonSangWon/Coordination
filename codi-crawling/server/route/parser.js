'use strict'

import { app } from '../index';
import { logger } from '../../logger';
import { getWeatherGPSCode } from '../service/parser';

const handler = async (req, res, next) => {
    try {
      return  await getWeatherGPSCode();
    } catch (err) {
      logger.error(`handler`, err);
      next(err);
    }
};

export default () => {
    try {
      app.get('/parser', handler);
    } catch(err) {
        logger.error(`[route/parser.js] handler`, err);
        return undefined;
    }
  };