'use strict'

import { app } from '../../index';
import { logger } from '../../../logger';
import { getImage } from '../../service/crawling/gopeople';

const handler = async (req, res, next) => {
    try {
        const { category, link } = req.query;
        if (!category || !link) {
            logger.error(`[GET] /crawling/gopeople, status: 400, msg: Not Params`);
            res.json({ 'status': 400, 'msg': 'Not Params' });
            return;
        }
        const result = await getImage(link);
        logger.info(`[GET] /crawling/gopeople, status: 200, link: ${link}, result: ${result.length}`);
        res.json({ 'status': 200, 'result': result });
    } catch (err) {
      logger.error(`[GET] /crawling/gopeople, handler`, err);
      next(err);
    }
};

export default () => {
    try {
      app.get('/crawling/gopeople', handler);
    } catch(err) {
      logger.error(`[GET] /crawling/gopeople`, err);
        return undefined;
    }
  };