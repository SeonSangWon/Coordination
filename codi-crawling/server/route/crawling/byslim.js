'use strict'

import { app } from '../../index';
import { logger } from '../../../logger';
import { getOuter } from '../../service/crawling/byslim';

const handler = async (req, res, next) => {
    try {
        const link = req.query.link;
        if (!link) {
            logger.error(`[GET] /crawling/byslim, status: 400, msg: Not Params`);
            res.json({ 'status': 400, 'msg': 'Not Params' });
            return;
        }
        const result = await getOuter(link);

        logger.info(`[GET] /crawling/image, status: 200, msg: good`);
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