'use strict'

import { logger } from '../../logger';

require('dotenv').config();
const request = require('request');
const API_KEY = process.env['API_KEY'];
const API_URL = process.env['API_URL'];

export const getCraling = async (params) => {
    // pageNo: 페이지 번호
    // numOfRows: 한 페이지 결과 수
    // dataType: return Type * defalut: xml
    // baseDate: 예보 일자
    // baseTime: 예보 시각
    // nx: 예보지점의 X 좌표값
    // ny: 예보지점의 Y 좌표값
    const { pageNo, numOfRows, dataType, baseDate, baseTime, nx, ny } = params;

    let queryParams = '?' + encodeURIComponent('serviceKey') + `=${API_KEY}`;
    queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent(pageNo);
    queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent(numOfRows);
    queryParams += '&' + encodeURIComponent('dataType') + '=' + encodeURIComponent(dataType); 
    queryParams += '&' + encodeURIComponent('base_date') + '=' + encodeURIComponent(baseDate); 
    queryParams += '&' + encodeURIComponent('base_time') + '=' + encodeURIComponent(baseTime); 
    queryParams += '&' + encodeURIComponent('nx') + '=' + encodeURIComponent(nx); 
    queryParams += '&' + encodeURIComponent('ny') + '=' + encodeURIComponent(ny); 

    return new Promise((resolve, reject) => {
        request({
            url: API_URL + queryParams,
            method: 'GET'
        }, function (error, response, body) {
            logger.info(`weather API Status: ${response.statusCode}`);
            resolve(body);
        });
    });
};