'use strict'

import { app } from '../../index';
import { logger } from '../../../logger';
import moment from 'moment-timezone';
import db from '../../../database/mysql/models';
const now = () => {
    return moment.tz('Asia/Seoul').format('YYYY-MM-DD HH:mm:ss');
}

const handler = async (req, res, next) => {
    try {
        const { shopId, category, link } = req.body;

        if ( !shopId || !category || !link ) {
          logger.error(`[POST] /shop-info, status: 400, msg: Not Params`);
          res.json({ 'status': 400, 'msg': 'Not Params' });
          return;
        }

        await db.shopInfos.create({
            shopId: shopId,
            category: category,
            link: link,
            createdAt: now()
        }).then((val) => {
            logger.info(`[POST] /shop-info, status: 200, infoId: ${val.infoId}`);
            res.json({ 'status': 200, 'infoId': val.infoId });
        });

      } catch (err) {
        logger.error(`[POST] /shop-info, handler`, err);
        next(err);
      }
};

export default () => {
    try {
      app.post('/shop-info', handler);
    } catch(err) {
        logger.error(`[POST] /shop-info`, err);
        return undefined;
    }
  };