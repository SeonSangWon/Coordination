'use strict'

require('dotenv').config();
const request = require('request');
const API_KEY = process.env['API_KEY'];
const API_URL = process.env['API_URL'];

export default async (params) => {
    async function getCraling() {
        const { pageNo, numOfRows, dataType, baseDate, baseTime, nx, ny } = params;

        let queryParams = '?' + encodeURIComponent('serviceKey') + `=${API_KEY}`;
        queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent(pageNo);
        queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent(numOfRows);
        queryParams += '&' + encodeURIComponent('dataType') + '=' + encodeURIComponent(dataType); 
        queryParams += '&' + encodeURIComponent('base_date') + '=' + encodeURIComponent(baseDate); 
        queryParams += '&' + encodeURIComponent('base_time') + '=' + encodeURIComponent(baseTime); 
        queryParams += '&' + encodeURIComponent('nx') + '=' + encodeURIComponent(nx); 
        queryParams += '&' + encodeURIComponent('ny') + '=' + encodeURIComponent(ny); 

        request({
            url: API_URL + queryParams,
            method: 'GET'
        }, function (error, response, body) {
            console.log('Status', response.statusCode);
            // console.log('Headers', JSON.stringify(response.headers));
            console.log('Reponse received', body);
        });
    };
    await getCraling();
};