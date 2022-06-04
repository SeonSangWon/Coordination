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
        const { name, link } = req.body;   
        if ( !name || !link ) {
          logger.error(`[POST] /shop, status: 400, msg: Not Params`);
          res.json({ 'status': 400, 'msg': 'Not Params' });
          return;
        }

        await db.shops.create({
            name: name,
            link: link,
            createdAt: now()
        }).then((val) => {
            logger.info(`[POST] /shop, status: 200, shopId: ${val.shopId}`);
            res.json({ 'status': 200, 'shopId': val.shopId });
        });

      } catch (err) {
        logger.error(`[POST] /shop, handler`, err);
        next(err);
      }
};

export default () => {
    try {
      app.post('/shop', handler);
    } catch(err) {
        logger.error(`[POST] /shop`, err);
        return undefined;
    }
  };