'use strict'

import { app } from '../../index';
import { logger } from '../../../logger';
import { getImage } from '../../service/crawling/byslim';

const handler = async (req, res, next) => {
    try {
        const { category, link } = req.query;
        if (!category || !link) {
            logger.error(`[GET] /crawling/byslim, status: 400, msg: Not Params`);
            res.json({ 'status': 400, 'msg': 'Not Params' });
            return;
        }
        const result = await getImage(link);
        logger.info(`[GET] /crawling/image, status: 200, result: ${result.length}`);
        res.json({ 'status': 200, 'result': result });
    } catch (err) {
      logger.error(`[GET] /crawling/byslim, handler`, err);
      next(err);
    }
};

export default () => {
    try {
      app.get('/crawling/byslim', handler);
    } catch(err) {
      logger.error(`[GET] /crawling/byslim`, err);
        return undefined;
    }
  };