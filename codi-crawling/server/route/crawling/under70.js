'use strict'

import { app } from '../../index';
import { logger } from '../../../logger';
import { getImage } from '../../service/crawling/under70';

const handler = async (req, res, next) => {
    try {
        const { category, link } = req.query;
        if (!category || !link) {
            logger.error(`[GET] /crawling/under70, status: 400, msg: Not Params`);
            res.json({ 'status': 400, 'msg': 'Not Params' });
            return;
        }
        const result = await getImage(link);
        logger.info(`[GET] /crawling/under70, status: 200, link: ${link}, result: ${result.length}`);
        res.json({ 'status': 200, 'result': result });
    } catch (err) {
      logger.error(`[GET] /crawling/under70, handler`, err);
      next(err);
    }
};

export default () => {
    try {
      app.get('/crawling/under70', handler);
    } catch(err) {
      logger.error(`[GET] /crawling/under70`, err);
        return undefined;
    }
  };