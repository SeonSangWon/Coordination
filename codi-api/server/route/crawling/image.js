'use strict'

import { app } from '../../index';
import { logger } from '../../../logger';
import { getShopLink } from '../../../database/mysql/queries';
import { getImageDownloader } from '../../../service';
import modelSearch from '../../../database/mongo/model/documents';
const axios = require('axios');
const path = require('path');
const fs = require('fs');

const SERVER_TYPE = process.env['SERVER_TYPE'];
const CRAWLING_URL = process.env[`${SERVER_TYPE}_CRAWLING_URL`];

const getFileName = async (url) => {
  const temp = url.split('/');
  const len = temp.length;
  return temp[len - 1];
};

const setImageInfo = async (shopName, imgName, category) => {
  try {
    const collectionName = 'style';
    const model = modelSearch(collectionName, 'style');
    await new model({
      shopName: shopName,
      category: category,
      color: null,
      imgName: imgName,
      identify: 'n'
    }).save();
  } catch (err) {
    logger.error(`[GET] /crawling/image, setImageInfo`, err);
  }
};

const handler = async (req, res, next) => {
  try {
    const { shopId, category } = req.query;
    if (!shopId || !category) {
      logger.error(`[GET] /crawling/image, status: 400, msg: Not Params`);
      res.json({ 'status': 400, 'msg': 'Not Params' });
      return;
    }

    const shop = await getShopLink(shopId, category);
    const dir = path.join(__dirname, '..', '..', '..', 'image', shop.name);
    !fs.existsSync(dir) && fs.mkdirSync(dir);

    const result = await axios.get(`http://${CRAWLING_URL}/crawling/${shop.name}`, {
      params: {
        category: shop.category,
        link: shop.link
      }
    });
    result.data.result.forEach(async (info) => {
      let fileExist = false;
      const imgName = await getFileName(info);

      if (fs.existsSync(dir + '/' + imgName)) fileExist = true;
      if(!fileExist) {
        const isDown = await getImageDownloader(info, dir);
        if (isDown) await setImageInfo(shop.name, imgName, shop.category);
      }
    }); 

    logger.info(`[GET] /crawling/image, status: 200, msg: success`);
    res.json({ 'status': 200, 'msg': 'success' });

  } catch (err) {
    logger.error(`[GET] /crawling/image, handler`, err);
    next(err);
  }
};

export default () => {
  try {
    app.get('/crawling/image', handler);
  } catch (err) {
    logger.error(`[[GET] /crawling/image`, err);
    return undefined;
  }
};