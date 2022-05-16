'use strict'

import { app } from '../index';
import { logger } from '../../logger';
import { getWeatherGPSCode } from '../service/parser';

const handler = async () => {
    const result = await getWeatherGPSCode();
    console.info(result);
};

export default () => {
    try {
      app.get('/parser', handler);
    } catch(err) {
        logger.error(`[route/parser.js] handler`, err);
        return undefined;
    }
  };