'use strict'

import { app } from '../index';
import { logger } from '../../logger';
import weather from '../service/weather';

const handler = async (req, res, next) => {
  try {
    const message = await weather();
    res.json(message);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export default () => {
  try {
    app.get('/weather', handler);
  } catch(err) {
      logger.error(`[route/index.js] handler`, err);
      return undefined;
  }
};