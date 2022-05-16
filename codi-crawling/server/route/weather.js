'use strict'

import { app } from '../index';
import { logger } from '../../logger';
import weather from '../service/weather';

const handler = async (req, res, next) => {
  try {
    // pageNo, numOfRows, dataType, baseDate, baseTime, nx, ny
    let params = {
      pageNo: '1',
      numOfRows: '10',
      dataType: 'JSON',
      baseDate: '20220516',
      baseTime: '0600',
      nx: '55',
      ny: '127'
    };
    const message = await weather(params);
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
      logger.error(`[route/weather.js] handler`, err);
      return undefined;
  }
};