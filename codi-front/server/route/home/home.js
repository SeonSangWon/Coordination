'use strict'

import { app } from '../../app';
import { logger } from '../../../logger';
const cheerio = require('cheerio');
const axios = require('axios');

const getHtml = async (url) => {
    try {
        return await axios.get(url);
      } catch (err) {
        logger.error(`[/home/home.js] getHtml`, err);
      }
};

const handler = async (req, res, next) => {
    logger.info("패션 코디북, 오늘 뭐 입지??");

    let imgList = [];
    const url = 'https://www.byslim.com/category/outer/5/';
    
    await getHtml(url).then(async (html) => {
        const $ = cheerio.load(html.data);
        const data = $('ul.prdList').children('li').each(async (idx, val) => {
            const img = $(val).find('div.box > div.thumbnail > div.prdImg > a > img').attr('src').replace('//', '');
            imgList[idx] = img;
        });
    });
    res.render('index', { style: imgList });
};

export default () => {
    try {
        app.get('/', handler);
    } catch(err) {
        logger.error(`[/home/home.js] handler`, err);
        return undefined;
    }
};