'use strict'

import { logger } from '../logger';
import moment from 'moment-timezone';
import modelSearch from '../database/mongo/model/documents';
const schedule = require('node-schedule');
const axiso = require('axios');

const SERVER_TYPE = process.env['SERVER_TYPE'];
const CRAWLING_URL = process.env[`${SERVER_TYPE}_CRAWLING_URL`];
const apiTime = ['0210', '0510', '0810', '1110', '1410', '1710', '2010', '2310'];
const scheduleSetting = SERVER_TYPE == 'REAL' ? '0 10 * * * *' : '0 10 * * * *';

export const weatherParser = async () => {
    // second, minute, hour, day, month, week (0 ~ 7 is Sun)
    schedule.scheduleJob(scheduleSetting, async () => {
        const pageNo = 1;
        const numOfRows = 40;
        const dataType = 'JSON';
        const baseDate = moment().tz('Asia/Seoul').format('YYYYMMDD');
        const baseTime = moment().tz('Asia/Seoul').format('HHMM');
        const nx = 51;
        const ny = 125;

        let isAPITime = false;
        apiTime.forEach(async (time) => {
            if (time == baseTime) isAPITime = true;
        });
        if (isAPITime) {
            const collectionName = 'weather';
            const model = modelSearch(collectionName, 'weather');
            const result = await axiso.get(`http://${CRAWLING_URL}/weather?pageNo=${pageNo}&numOfRows=${numOfRows}&dataType=${dataType}&baseDate=${baseDate}&baseTime=${baseTime}&nx=${nx}&ny=${ny}`);
            
            result.data.forEach(async (info) => {
                await new model({
                    baseDate: info.baseDate,
                    baseTime: info. baseTime,
                    category: info.category,
                    fcstDate: info.fcstDate,
                    fcstTime: info.fcstTime,
                    fcstValue: info.fcstValue,
                    nx: info.nx,
                    ny: info.ny
                }).save();
            });
            logger.info(`${baseDate}${baseTime} weather API Status: 200`);
        }
    });
};