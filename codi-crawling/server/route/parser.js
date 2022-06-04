'use strict'

import { app } from '../index';
import { logger } from '../../logger';
import { getWeatherCode } from '../service/parser';

const handler = async (req, res, next) => {
    try {
      logger.info(`[GET] /parser, status: 200`);
      res.json(await getWeatherCode());
    } catch (err) {
      logger.error(`[GET] /parser, handler`, err);
      next(err);
    }
};

export default () => {
    try {
      app.get('/parser', handler);
    } catch(err) {
      logger.error(`[GET] /parser`, err);
        return undefined;
    }
  };