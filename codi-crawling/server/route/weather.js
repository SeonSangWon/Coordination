'use strict'

import { app } from '../index';
import { logger } from '../../logger';
import { getCraling } from '../service/weather';

const handler = async (req, res, next) => {
  try {
    // T1H: 날씨 - 기온
    // SKY: 하늘 상태 : 맑음(1), 구름많음(3), 흐림(4)
    let params = req.query;
    const message = await getCraling(params);
    const result = JSON.parse(message).response.body.items.item;
    const data = result.filter(info => {
      if (info.category === 'T1H' || info.category === 'SKY')
        return true;
    });

    logger.info(`[GET] /weather, status: 200`);
    res.send(data);
  } catch (err) {
    logger.error(`[GET] /weather, handler`, err);
    next(err);
  }
};

export default () => {
  try {
    app.get('/weather', handler);
  } catch(err) {
    logger.error(`[GET] /weather`, err);
      return undefined;
  }
};