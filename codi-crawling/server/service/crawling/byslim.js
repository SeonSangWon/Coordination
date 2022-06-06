'use strict'

import { logger } from '../../../logger';
const axios = require('axios');
const cheerio = require('cheerio');

const getHtml = async (url) => {
    try {
        return await axios.get(url);
      } catch (err) {
        logger.error(`getHtml`, err);
      }
};

export const getOuter = async (url) => {
    try {
        let result ,imgList = [];
        await getHtml(url).then(async (html) => {
            const $ = cheerio.load(html.data);
            const data = $('ul.prdList').children('li').each(async (idx, val) => {
                const img = $(val).find('div.box > div.thumbnail > div.prdImg > a > img').attr('src').replace('//', '');
                imgList[idx] = 'https://'+img;
            });
        });
        result = imgList.filter((element, idx) => {
            return imgList.indexOf(element) === idx;
        });
        return result;
    } catch (err) {
        logger.error(`getOuter, ${url}`, err);
        return undefined;
    }
};